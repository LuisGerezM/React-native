/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Game} from './src/components/Game';
function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Game />
    </GestureHandlerRootView>
  );
}

export default App;