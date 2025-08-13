import React from 'react';
import { View, StyleSheet } from 'react-native';

const Skeleton = () => (
  <View style={styles.placeholder} />
);

const styles = StyleSheet.create({
  placeholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
});

export default Skeleton;
