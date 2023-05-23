import React from 'react';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';
import {defaultTheme} from '../theme/default';
import translation from '../assets/translations';
import MainButton from './MainButton';
import {usePermissions} from '../hooks/usePermissions';
import {strings} from '../config/strings';

const LocationPermissionModal = () => {
  const i18n = translation();
  const {requestLocationPermission} = usePermissions();
  return (
    <>
      <Container>
        <LottieView
          autoPlay={true}
          loop={false}
          imageAssetsFolder={'lottie'}
          source={require('../assets/lottie/location-logo.json')}
          style={{
            height: 200,
            width: 250,
            alignSelf: 'center',
          }}
        />
        <PermissionTextTitle>{`${i18n.t(strings.hello)}`}</PermissionTextTitle>
        <PermissionText>{`${i18n.t(strings.locationWarning)}`}</PermissionText>
      </Container>
      <MainButton
        label={`${i18n.t(strings.continue)}`}
        onPress={() => requestLocationPermission()}></MainButton>
    </>
  );
};

export default LocationPermissionModal;

const Container = styled.View`
flex: 1
justify-content: center;
align-items: center;
`;

const PermissionText = styled.Text`
  text-align: center;
  margin-top: ${defaultTheme.sizes.getSpacing(2)}px;
  font-size: 18px;
  font-weight: 200;
`;

const PermissionTextTitle = styled.Text`
  text-align: center;
  margin-top: ${defaultTheme.sizes.getSpacing(3)}px;
  font-size: 20px;
  font-weight: 300;
`;
