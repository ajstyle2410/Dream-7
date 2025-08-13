import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  name: string;
  image: string;
};

const GameTile = ({ name, image }: Props) => (
  <View style={styles.tile}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  tile: { margin: 8 },
  image: { width: 100, height: 100, borderRadius: 8 },
  name: { marginTop: 8, fontSize: 14 },
});

export default GameTile;
