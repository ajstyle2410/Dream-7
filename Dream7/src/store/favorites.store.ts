
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FavoriteId = string;

type FavoritesState = {
  ids: Set<FavoriteId>;
  add: (id: FavoriteId) => void;
  remove: (id: FavoriteId) => void;
  toggle: (id: FavoriteId) => void;
  clear: () => void;
  isFavorite: (id: FavoriteId) => boolean;
  list: () => FavoriteId[];
  count: () => number;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      ids: new Set<FavoriteId>(),

      add: (id) =>
        set((state) => {
          const next = new Set(state.ids);
          next.add(id);
          return { ids: next };
        }),

      remove: (id) =>
        set((state) => {
          const next = new Set(state.ids);
          next.delete(id);
          return { ids: next };
        }),

      toggle: (id) => {
        const isFav = get().ids.has(id);
        return isFav ? get().remove(id) : get().add(id);
      },

      clear: () => set({ ids: new Set() }),

      isFavorite: (id) => get().ids.has(id),
      list: () => Array.from(get().ids),
      count: () => get().ids.size,
    }),
    {
      name: 'favorites.v1',
      storage: createJSONStorage(() => AsyncStorage),

      // Store only the ids as an array (JSON-serializable).
      // Cast to 'unknown' to satisfy the 'Partial<FavoritesState>' constraint.
      partialize: (state) =>
        ({ ids: Array.from(state.ids) } as unknown),

      // Rehydrate: turn the stored array back into a Set.
      merge: (persisted, current) => {
        const p = persisted as { ids?: string[] } | undefined;
        return {
          ...current,
          ids: new Set(p?.ids ?? []),
        };
      },
    }
  )
);
