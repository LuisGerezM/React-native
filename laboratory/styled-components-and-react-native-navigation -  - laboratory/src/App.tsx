/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from 'styled-components';
import {View1} from 'src/components/View1';
import {defaultTheme} from './styled-components/theme';
import Navigation from './Navigation';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
