import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

export function useResponsiveSize() {
  const { width } = useWindowDimensions();

  const contentWidth = Math.max(320, width - 32); // default horizontal padding ~16 each side

  const grid = useMemo(() => {
    let columns = 2;
    if (width >= 360) columns = 3;
    if (width >= 768) columns = 4;

    const gap = 12;
    const size = Math.floor((contentWidth - gap * (columns - 1)) / columns);

    return { columns, gap, size, itemAspect: 1 };
  }, [contentWidth, width]);

  const carousel = useMemo(() => {
    const size = Math.max(120, Math.min(180, Math.round(width * 0.42)));
    const gap = 14;
    return { size, gap };
  }, [width]);

  const isSmall = width < 360;
  const isTablet = width >= 768;

  return { width, contentWidth, grid, carousel, isSmall, isTablet };
}
