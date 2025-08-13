import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Dream7</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: '600' },
});

export default AppHeader;
