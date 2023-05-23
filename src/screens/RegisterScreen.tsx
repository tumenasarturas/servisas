import React, {useCallback} from 'react';
import CustomHeader from '../components/CustomHeader';
import AppLayout from '../components/AppLayout';
import LottieView from 'lottie-react-native';
import {FieldType, forms} from '../config/forms';
import {Controller, useForm} from 'react-hook-form';
import MainInput from '../components/MainInput';
import {strings} from '../config/strings';
import {SignUpForm} from '../typescript/auth';
import {yupResolver} from '@hookform/resolvers/yup';
import {EFormName} from '../typescript/static/EForm';
import styled from 'styled-components/native';
import {defaultTheme} from '../theme/default';
import translation from '../assets/translations';
import MainButton from '../components/MainButton';
import {useAuthorization} from '../hooks/useAuthorization';

const RegisterScreen = () => {
  const i18n = translation();
  const {signUp} = useAuthorization();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      [EFormName.Email]: '',
      [EFormName.Password]: '',
      [EFormName.ConfirmPassword]: '',
      [EFormName.Name]: '',
    },
    resolver: yupResolver(forms.signUp.validationSchema),
  });

  const renderInput = useCallback(
    (form: FieldType<SignUpForm>) => {
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
    <AppLayout scrollEnabled>
      <CustomHeader />
      <LottieView
        autoPlay={true}
        loop={true}
        imageAssetsFolder={'lottie'}
        source={require('../assets/lottie/registration-logo.json')}
        style={{
          height: 120,
          width: 220,
          alignSelf: 'center',
        }}
      />
      <RegistrationSlogan>
        {i18n.t(strings.registration.slogan)}
      </RegistrationSlogan>
      <>{forms.signUp.fields.map(renderInput)}</>
      <ButtonContainer>
        <MainButton
          label={`${i18n.t(strings.register)}`}
          onPress={handleSubmit(signUp)}
        />
      </ButtonContainer>
    </AppLayout>
  );
};

export default RegisterScreen;

const ErrorText = styled.Text`
  color: ${defaultTheme.colors.error};
  margin-top: ${defaultTheme.sizes.getSpacing(1)}px;
`;

const ButtonContainer = styled.View`
  margin-top: ${defaultTheme.sizes.getSpacing(5)}px;
`;

const RegistrationSlogan = styled.Text`
  text-align: center;
  margin-vertical: ${defaultTheme.sizes.getSpacing(5)}px;
  font-size: 16px;
  font-weight: 100;
`;
