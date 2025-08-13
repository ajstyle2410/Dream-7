import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_PREFIX } from '../utils/constants';

const k = (key: string) => `${STORAGE_PREFIX}${key}`;

export const Storage = {
  async getString(key: string) {
    return AsyncStorage.getItem(k(key));
  },

  async setString(key: string, value: string) {
    await AsyncStorage.setItem(k(key), value);
  },

  async getJSON<T>(key: string): Promise<T | null> {
    const v = await AsyncStorage.getItem(k(key));
    if (!v) return null;
    try {
      return JSON.parse(v) as T;
    } catch {
      return null;
    }
  },

  async setJSON<T>(key: string, value: T) {
    await AsyncStorage.setItem(k(key), JSON.stringify(value));
  },

  async remove(key: string) {
    await AsyncStorage.removeItem(k(key));
  },

  async mergeJSON<T extends object>(key: string, partial: Partial<T>) {
    const current = (await this.getJSON<T>(key)) ?? ({} as T);
    const next = { ...current, ...partial };
    await this.setJSON<T>(key, next);
    return next;
  },

  async keys() {
    const all = await AsyncStorage.getAllKeys();
    return all.filter((x) => x.startsWith(STORAGE_PREFIX));
  },

  async clearNamespace() {
    const all = await this.keys();
    if (all.length) await AsyncStorage.multiRemove(all);
  },
};
