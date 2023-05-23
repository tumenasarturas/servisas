import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from './components/TabBar';
import {EAppTabs} from '../typescript/static/EAppScreens';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from './FavoritesScreen';
import ProfileScreen from './ProfileScreen';

const BottomTab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <BottomTab.Navigator
      tabBar={props => <TabBar {...props} />}
      initialRouteName={EAppTabs.Home}
      screenOptions={{headerShown: false}}>
      <BottomTab.Screen name={EAppTabs.Home} component={HomeScreen} />
      <BottomTab.Screen name={EAppTabs.Favorites} component={FavoritesScreen} />
      <BottomTab.Screen name={EAppTabs.Profile} component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

export default TabStack;
