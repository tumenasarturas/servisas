import {useCallback} from 'react';
import {SubmitHandler} from 'react-hook-form';
import {SignInForm, SignUpForm} from '../typescript/auth';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {EAppScreens} from '../typescript/static/EAppScreens';
import {showMessage} from 'react-native-flash-message';
import translation from '../assets/translations';
import {strings} from '../config/strings';

export const useAuthorization = () => {
  const navigation = useNavigation();
  const i18next = translation();

  const setUserDocument = useCallback(
    async (user: FirebaseAuthTypes.User, form: SignUpForm) => {
      const userRef = await firestore().collection('users').doc(user.uid);

      await userRef.set({
        displayName: form.name,
        email: form.email,
        createdAt: new Date(),
      });

      navigation.reset({
        index: 0,
        routes: [{name: EAppScreens.TabStack}],
      });
    },
    [],
  );

  const signIn: SubmitHandler<SignInForm> = useCallback(async form => {
    auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{name: EAppScreens.TabStack}],
        });
      })
      .catch(error => {
        switch (error.code) {
          case "auth/wrong-password":
            showMessage({
              message: `${i18next.t(strings.flashMessage.wrongPassword)}`,
              type: 'danger',
            });
            break;
        case "auth/user-not-found":
          showMessage({
            message: `${i18next.t(strings.flashMessage.emailDontExist)}`,
            type: 'danger',
          });
          break;
          default:
            break;
        }
      });
  }, []);

  const signUp: SubmitHandler<SignUpForm> = useCallback(async form => {
    auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(({user}) => {
        showMessage({
          message: `${i18next.t(strings.flashMessage.registrationSuccessful)}`,
          type: 'success',
        });
        setUserDocument(user, form);
      })
      .catch(error => {
        switch (error.code) {
          case "auth/email-already-in-use":
            showMessage({
              message: `${i18next.t(strings.flashMessage.emailAlreadyInUse)}`,
              type: 'danger',
            });
            break;
          default:
            break;
        }
      });
  }, []);

  return {
    signIn,
    signUp,
  };
};
