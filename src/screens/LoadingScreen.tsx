import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {defaultTheme} from '../theme/default';
import {icons} from '../assets/images';
import {useNavigation} from '@react-navigation/native';
import {EAppScreens} from '../typescript/static/EAppScreens';
import auth from '@react-native-firebase/auth';
import {usePermissions} from '../hooks/usePermissions';
import {useLocation} from '../hooks/useLocation';
import {usePlaces} from '../hooks/usePlaces';

const LoadingScreen = () => {
  const navigation = useNavigation();
  const {checkLocationPermissions} = usePermissions();
  const {getCurrentLocation} = useLocation();

  useEffect(() => {
    checkLocationPermissions();
    getCurrentLocation();

    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setTimeout(() => {
          navigation.navigate(EAppScreens.TabStack);
        }, 2000);
      } else {
        setTimeout(() => {
          navigation.navigate(EAppScreens.SignIn);
        }, 2000);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Container>
      <Image source={icons.logo} resizeMode="contain" />
    </Container>
  );
};

export default LoadingScreen;

const Container = styled.View`
    flex: 1
    align-items: center;
    justify-content: center;
    background-color: ${defaultTheme.colors.background}
`;

const Image = styled.Image`
  height: 180px;
  width: 220px;
`;
