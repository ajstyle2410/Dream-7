import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

const Row = (props: ViewProps) => (
  <View style={[styles.row, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
});

export default Row;
