import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Colors, Spacing, Radius } from '../theme/tokens';

interface Props {
  onOpenQuickPlay: () => void;
}

export default function BottomBar({ onOpenQuickPlay }: Props) {
  return (
    <View style={styles.bar}>
      <Pressable style={styles.button} onPress={onOpenQuickPlay}>
        <Text style={styles.buttonText}>Quick Play</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: Spacing.lg,
    backgroundColor: Colors.card,
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: Radius.lg,
    alignItems: 'center',
  },
  buttonText: { color: '#2A0E47', fontWeight: '700' },
});
