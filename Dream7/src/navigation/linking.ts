import type { LinkingOptions } from '@react-navigation/native';
import type { RootStackParamList } from './types';

const config = {
  screens: {
    Home: 'home',
    Game: 'game/:id',
    Category: 'category/:category',
    Wallet: 'wallet',
    Profile: 'profile',
    Refer: 'refer',
    Search: 'search',
    Notifications: 'notifications',
    Wheel: 'wheel',
    GamesCatalog: 'catalog'
  }
};

export const linking: LinkingOptions<RootStackParamList> = {
  // Update these to your actual scheme and domain
  prefixes: ['myapp://', 'https://myapp.example'],
  config
};
