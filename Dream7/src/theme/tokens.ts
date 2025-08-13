export const Colors = {
  text: '#FFFFFF',
  textMuted: '#98A2B3',
  primary: '#FFD700',
  background: '#0B0D12',
  surface: '#12151C',
  surfaceAlt: '#151A22',
  card: '#151A22',
  border: '#1F2330',
  overlay: 'rgba(0,0,0,0.6)',

  divider: '#1F2330', 
};

export const Space = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const;

export const Radii = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  pill: 999,
} as const;

export const FontSizes = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
} as const;

export const LineHeights = {
  tight: 1.1,
  snug: 1.25,
  normal: 1.4,
  relaxed: 1.6,
} as const;

export const Z = {
  base: 0,
  header: 10,
  modal: 100,
  toast: 1000,
} as const;

export const Duration = {
  fast: 150,
  normal: 250,
  slow: 400,
} as const;

export const Easing = {
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
} as const;





export const Radius = {
  pill: 9999, 
  sm: 4,
  md: 8,
  lg: 12,
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const Tokens = {
  colors: Colors,
  space: Space,
  radii: Radii,
  fontSizes: FontSizes,
  lineHeights: LineHeights,
  z: Z,
  duration: Duration,
  easing: Easing,
};