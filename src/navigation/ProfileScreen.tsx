import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import AppLayout from '../components/AppLayout';
import {useNavigation} from '@react-navigation/native';
import MainButton from '../components/MainButton';
import {EAppScreens} from '../typescript/static/EAppScreens';
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const signOut = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: EAppScreens.SignIn}],
    });

    auth().signOut();
  }, [navigation]);
  return (
    <AppLayout>
      <View>
        <MainButton label="Sign Out" onPress={() => signOut()} />
      </View>
    </AppLayout>
  );
};

export default ProfileScreen;
