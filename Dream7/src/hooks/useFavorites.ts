import { useCallback, useMemo, useState } from 'react';

export default function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const isFavorite = useCallback((id: string) => favorites.has(id), [favorites]);
  const clear = useCallback(() => setFavorites(new Set()), []);
  const count = useMemo(() => favorites.size, [favorites]);
  const list = useMemo(() => Array.from(favorites), [favorites]);

  return { favorites, list, count, isFavorite, toggleFavorite, clear };
}
