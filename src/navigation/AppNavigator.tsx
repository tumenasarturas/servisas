import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {EAppScreens} from '../typescript/static/EAppScreens';
import HomeScreen from '../screens/HomeScreen';
import {MAIN_NAVIGATOR_OPTIONS} from './options';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import RNBootSplash from 'react-native-bootsplash';
import LoadingScreen from '../screens/LoadingScreen';
import ChooseLanguageScreen from '../screens/ChooseLanguageScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabStack from './TabStack';
import InnerAutoRepairShopScreen from '../screens/InnerAutoRepairShopScreen';
import {AutoRepairShopItem} from '../typescript/redux/EPlacesTypes';

type RootStackParamList = {
  [EAppScreens.Home]: {};
  [EAppScreens.SignIn]: {};
  [EAppScreens.Loading]: {};
  [EAppScreens.Language]: {};
  [EAppScreens.Register]: {};
  [EAppScreens.TabStack]: {};
  [EAppScreens.InnerAutoRepair]: {};
};

const AppNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const handleOnReady = useCallback(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <NavigationContainer onReady={handleOnReady}>
      <Stack.Navigator
        screenOptions={MAIN_NAVIGATOR_OPTIONS}
        initialRouteName={EAppScreens.Loading}>
        <Stack.Screen name={EAppScreens.Home} component={HomeScreen} />
        <Stack.Screen name={EAppScreens.SignIn} component={SignInScreen} />
        <Stack.Screen name={EAppScreens.Loading} component={LoadingScreen} />
        <Stack.Screen name={EAppScreens.Register} component={RegisterScreen} />
        <Stack.Screen
          name={EAppScreens.InnerAutoRepair}
          component={InnerAutoRepairShopScreen}
        />

        <Stack.Screen
          name={EAppScreens.Language}
          component={ChooseLanguageScreen}
        />
        <Stack.Screen name={EAppScreens.TabStack} component={TabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
