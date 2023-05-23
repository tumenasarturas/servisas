import {View, Text} from 'react-native';
import React from 'react';
import AppLayout from '../components/AppLayout';
import LanguageButton from '../components/LanguageButton';

const FavoritesScreen = () => {
  return (
    <AppLayout>
      <View>
        <LanguageButton />
        <Text>FavoritesScreen</Text>
      </View>
    </AppLayout>
  );
};

export default FavoritesScreen;
