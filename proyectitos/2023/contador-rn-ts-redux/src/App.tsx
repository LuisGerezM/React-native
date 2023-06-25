/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Counter from './components/Counter';
import {ButtonRedux} from './components/ButtonRedux';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>Hola mundo</Text>
        <Counter />
        <ButtonRedux />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
