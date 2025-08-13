import { StyleSheet } from 'react-native';
import { theme } from '../theme';

// Use the exact keys from the theme tokens for perfect type safety.
type SpaceKey = keyof typeof theme.space;
type FontSizeKey = keyof typeof theme.fontSizes;
type RadiusKey = keyof typeof theme.radii;

export const styles = {
  screen: StyleSheet.create({
    base: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    centered: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },
    content: {
      paddingHorizontal: theme.space[4],
      paddingVertical: theme.space[3],
    },
  }),

  text: StyleSheet.create({
    title: {
      color: theme.colors.text,
      fontSize: theme.fontSizes.xl,
      fontWeight: '700',
    },
    body: {
      color: theme.colors.textMuted,
      fontSize: theme.fontSizes.md,
    },
    caption: {
      color: theme.colors.textMuted,
      fontSize: theme.fontSizes.sm,
    },
  }),

  row: StyleSheet.create({
    base: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    between: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }),

  card: StyleSheet.create({
    base: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radii.lg,
      padding: theme.space[3],
    },
  }),
};

// Strict helper: only allow valid space token keys.
export const s = (n: SpaceKey) => theme.space[n];

// Convenience helpers for font size and radius if you want parity.
export const fs = (k: FontSizeKey) => theme.fontSizes[k];
export const r = (k: RadiusKey) => theme.radii[k];

export const hairline = StyleSheet.hairlineWidth;
export { theme };
