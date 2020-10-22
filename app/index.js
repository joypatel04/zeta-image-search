import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {createClient} from './packages/api';
import {GOOGLE_API_KEY, GOOGLE_CX} from './utils/config';

import AppNavigator from './navigatation/AppNavigator';
import {store, persistor} from './redux/store';

global.client = createClient({
  baseURL: `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_CX}`,
});

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <AppNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
