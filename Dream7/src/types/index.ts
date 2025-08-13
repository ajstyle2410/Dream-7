export type Id = string;

export type CategoryKey = 'featured' | 'cricket' | 'sports' | 'arcade' | 'puzzle' | 'casual';

export type Game = {
  id: Id;
  title: string;
  tileUrl: string;
  category: CategoryKey | string;
  route: 'Game';
  tags?: string[];
};

export type GamesByCategory = Record<string, Game[]>;

export type AnalyticsEvent = {
  name: string;
  params?: Record<string, string | number | boolean | null | undefined>;
  ts?: number;
};

export type Nullable<T> = T | null | undefined;
