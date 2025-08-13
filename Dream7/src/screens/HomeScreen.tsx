import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B0D12' }}>
      <Text style={{ color: '#FFFFFF', fontSize: 22 }}>Welcome to Dream7!</Text>
      <Text style={{ color: '#AAAAAA', marginTop: 8 }}>This is your Home screen.</Text>
    </View>
  );
}
