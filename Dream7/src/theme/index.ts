import { Tokens, Colors, Space, Radii, FontSizes, LineHeights, Z, Duration, Easing } from './tokens';

export type Theme = {
  colors: typeof Colors;
  space: typeof Space;
  radii: typeof Radii;
  fontSizes: typeof FontSizes;
  lineHeights: typeof LineHeights;
  z: typeof Z;
  duration: typeof Duration;
  easing: typeof Easing;
};

export const theme: Theme = {
  colors: Colors,
  space: Space,
  radii: Radii,
  fontSizes: FontSizes,
  lineHeights: LineHeights,
  z: Z,
  duration: Duration,
  easing: Easing,
};

export { Tokens };
