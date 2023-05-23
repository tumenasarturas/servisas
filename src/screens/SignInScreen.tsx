import React, {useCallback} from 'react';
import AppLayout from '../components/AppLayout';
import {useForm, Controller} from 'react-hook-form';

import MainInput from '../components/MainInput';
import {strings} from '../config/strings';
import styled from 'styled-components/native';
import {icons} from '../assets/images';
import LanguageButton from '../components/LanguageButton';
import {defaultTheme} from '../theme/default';
import translation from '../assets/translations';
import {FieldType, forms} from '../config/forms';
import {SignInForm} from '../typescript/auth';
import {yupResolver} from '@hookform/resolvers/yup';
import MainButton from '../components/MainButton';
import {useAuthorization} from '../hooks/useAuthorization';
import {EFormName} from '../typescript/static/EForm';
import {useNavigation} from '@react-navigation/native';
import {EAppScreens} from '../typescript/static/EAppScreens';

const SignInScreen = () => {
  const i18n = translation();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      [EFormName.Email]: '',
      [EFormName.Password]: '',
    },
    resolver: yupResolver(forms.signIn.validationSchema),
  });

  const {signIn} = useAuthorization();

  const renderInput = useCallback(
    (form: FieldType<SignInForm>) => {
      return (
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <MainInput
                placeholder={`${i18n.t(strings.formPlaceholders[form.name])}`}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureText={form.secureTextEntry}
              />
              {errors[form.name]?.message && (
                <ErrorText>{errors[form.name]?.message}</ErrorText>
              )}
            </>
          )}
          name={form.name}
        />
      );
    },
    [control, errors, i18n],
  );

  return (
    <AppLayout>
      <Container>
        <LanguageButton />
        <Image source={icons.logo} resizeMode="contain" />
        {forms.signIn.fields.map(renderInput)}
        <ButtonContainer>
          <MainButton
            label={`${i18n.t(strings.login)}`}
            onPress={handleSubmit(signIn)}
          />
          <NoAccount>{`${i18n.t(strings.noAccount)}`}</NoAccount>
          <MainButton
            label={`${i18n.t(strings.register)}`}
            onPress={() => navigation.navigate(EAppScreens.Register)}
            inverted
          />
        </ButtonContainer>
      </Container>
    </AppLayout>
  );
};

export default SignInScreen;

const Container = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  height: 180px;
  width: 220px;
  align-self: center;
  margin-top: ${defaultTheme.sizes.getSpacing(5)}px;
`;

const ButtonContainer = styled.View`
  margin-top: ${defaultTheme.sizes.getSpacing(10)}px;
`;

const NoAccount = styled.Text`
  color: ${defaultTheme.colors.placeholder};
  margin-vertical: ${defaultTheme.sizes.appPadding / 2}px;
  align-self: center;
`;

const ErrorText = styled.Text`
  color: ${defaultTheme.colors.error};
  margin-top: ${defaultTheme.sizes.getSpacing(1)}px;
`;
