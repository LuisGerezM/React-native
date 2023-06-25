/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text} from 'react-native-svg';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {SeeBalanceMovement} from './components/SeeBalanceMovement';
import {store} from './redux/store';

let persistor = persistStore(store);

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={styles.container}>
            <Text style={styles.title}>Cargando ...</Text>
          </View>
        }
        persistor={persistor}>
        <SafeAreaProvider>
          <SeeBalanceMovement />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
