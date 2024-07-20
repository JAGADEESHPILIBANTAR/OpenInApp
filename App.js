import 'react-native-gesture-handler';
import React from 'react';
import {NativeBaseProvider} from 'native-base'
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import AppContainer from './src/navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { configStore } from './src/reduxManager';

function App() {
  const { store, persistor } = configStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider>
        <AppContainer />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
