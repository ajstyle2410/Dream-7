import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import type { RootStackParamList } from './types';
import { linking } from './linking';

// Replace with your theme if you have one
const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#0B0D12',
    card: '#0B0D12',
    text: '#FFFFFF',
    border: '#1F2330',
    primary: '#6C8CFF',
    notification: '#FF6C6C'
  }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Simple placeholder to keep the navigator self-contained
const Stub = ({ title }: { title: string }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.background }}>
    <Text style={{ color: theme.colors.text, fontSize: 18 }}>{title}</Text>
  </View>
);

export default function AppNavigator() {
  return (
    <NavigationContainer theme={theme} linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
        <Stack.Screen name="Home" children={() => <Stub title="Home" />} />
        <Stack.Screen name="Profile" children={() => <Stub title="Profile" />} />
        <Stack.Screen name="Wallet" children={() => <Stub title="Wallet" />} />
        <Stack.Screen name="Notifications" children={() => <Stub title="Notifications" />} />
        <Stack.Screen name="Wheel" children={() => <Stub title="Wheel" />} />
        <Stack.Screen name="Search" children={() => <Stub title="Search" />} />
        <Stack.Screen name="Refer" children={() => <Stub title="Refer & Earn" />} />
        <Stack.Screen name="GamesCatalog" children={() => <Stub title="Games Catalog" />} />
        <Stack.Screen name="Category" children={() => <Stub title="Category" />} />
        <Stack.Screen name="Game" children={() => <Stub title="Game Detail" />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
