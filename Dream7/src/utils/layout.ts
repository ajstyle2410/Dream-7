export const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export const isSmallPhone = (width: number) => width < 360;
export const isTablet = (width: number) => width >= 768;

export type GridSpec = {
  columns: number;
  gap: number;
  size: number;
  itemAspect: number;
};

export const computeGrid = ({
  width,
  horizontalPadding = 32,
  columnsForWidth,
  gap = 12,
  aspect = 1,
}: {
  width: number;
  horizontalPadding?: number;
  columnsForWidth?: (w: number) => number;
  gap?: number;
  aspect?: number;
}): GridSpec => {
  const contentWidth = Math.max(320, width - horizontalPadding);
  const columns =
    columnsForWidth?.(width) ?? (width >= 768 ? 4 : width >= 360 ? 3 : 2);
  const size = Math.floor((contentWidth - gap * (columns - 1)) / columns);
  return { columns, gap, size, itemAspect: aspect };
};

export const carouselSize = (width: number, min = 120, max = 180) => clamp(Math.round(width * 0.42), min, max);
