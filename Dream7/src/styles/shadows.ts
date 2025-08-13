// styles/shadows.ts
import { Platform, type ViewStyle } from 'react-native';

export type ShadowLevel = 0 | 1 | 2 | 3 | 4 | 5;

const IOS_SHADOWS: Record<ShadowLevel, ViewStyle> = {
  0: { shadowColor: '#000', shadowOpacity: 0, shadowRadius: 0, shadowOffset: { width: 0, height: 0 } },
  1: { shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 4, shadowOffset: { width: 0, height: 2 } },
  2: { shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 6, shadowOffset: { width: 0, height: 3 } },
  3: { shadowColor: '#000', shadowOpacity: 0.16, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } },
  4: { shadowColor: '#000', shadowOpacity: 0.22, shadowRadius: 12, shadowOffset: { width: 0, height: 6 } },
  5: { shadowColor: '#000', shadowOpacity: 0.28, shadowRadius: 16, shadowOffset: { width: 0, height: 8 } },
};

const iosShadow = (level: ShadowLevel): ViewStyle => IOS_SHADOWS[level];

const androidShadow = (level: ShadowLevel): ViewStyle => ({ elevation: level });

export const shadow = (level: ShadowLevel = 2): ViewStyle => {
  const style = Platform.select<ViewStyle>({
    ios: iosShadow(level),
    android: androidShadow(level),
    default: {},
  });
  return style as ViewStyle;
};
