export type Game = {
  id: string;
  title: string;
  tileUrl: string;
  category: string;
  route: string;
  tags?: string[];
};

export const loadLocalGames = async (): Promise<Game[]> => {
await new Promise<void>((resolve) => setTimeout(() => resolve(), 300));
  const data = require('./games.json') as Game[];
  return data;
};
