import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
