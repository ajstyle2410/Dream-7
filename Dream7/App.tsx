import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from './src/theme/tokens';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-url-polyfill/auto';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <AppNavigator />
    </>
  );
}
