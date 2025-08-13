import { Linking } from 'react-native';
import { APP_DOMAIN, APP_SCHEME } from '../utils/constants';

type Params = Record<string, string | undefined>;

export type DeepLink =
  | { route: 'Home'; params?: undefined }
  | { route: 'Game'; params: { id?: string } }
  | { route: 'Category'; params: { category?: string } }
  | { route: 'Wallet'; params?: undefined }
  | { route: 'Profile'; params?: undefined }
  | { route: 'Refer'; params?: undefined }
  | { route: 'Search'; params?: undefined }
  | { route: 'Notifications'; params?: undefined }
  | { route: 'Wheel'; params?: undefined }
  | { route: 'GamesCatalog'; params?: undefined };

const pathFor = (link: DeepLink): string => {
  switch (link.route) {
    case 'Home':
      return 'home';
    case 'Game':
      return `game/${encodeURIComponent(link.params.id ?? '')}`;
    case 'Category':
      return `category/${encodeURIComponent(link.params.category ?? '')}`;
    case 'Wallet':
      return 'wallet';
    case 'Profile':
      return 'profile';
    case 'Refer':
      return 'refer';
    case 'Search':
      return 'search';
    case 'Notifications':
      return 'notifications';
    case 'Wheel':
      return 'wheel';
    case 'GamesCatalog':
      return 'catalog';
  }
};

export const buildDeepLink = (link: DeepLink, useHttps = true) => {
  const prefix = useHttps ? `https://${APP_DOMAIN}` : `${APP_SCHEME}://`;
  const path = pathFor(link);
  return `${prefix}/${path}`;
};

export const openDeepLink = async (link: DeepLink, useHttps = false) => {
  const url = buildDeepLink(link, useHttps);
  return Linking.openURL(url);
};

const parseParams = (segments: string[]): Params => {
  // Basic single-param routes: game/:id, category/:category
  if (segments[0] === 'game') return { id: decodeURIComponent(segments[1] ?? '') };
  if (segments[0] === 'category') return { category: decodeURIComponent(segments[1] ?? '') };
  return {};
};

export const parseDeepLinkUrl = (url: string): DeepLink | null => {
  try {
   const [_, pathWithScheme] = url.split('://');
    const [domainAndPath] = pathWithScheme.split('/');
    const path = url.replace(/^.*\/\/[^/]+\/?/, '');
    const segments = path.split('/').filter(Boolean);


    if (segments.length === 0) return { route: 'Home' };

    switch (segments[0]) {
      case 'home':
        return { route: 'Home' };
      case 'game':
        return { route: 'Game', params: { id: parseParams(segments).id } };
      case 'category':
        return { route: 'Category', params: { category: parseParams(segments).category } };
      case 'wallet':
        return { route: 'Wallet' };
      case 'profile':
        return { route: 'Profile' };
      case 'refer':
        return { route: 'Refer' };
      case 'search':
        return { route: 'Search' };
      case 'notifications':
        return { route: 'Notifications' };
      case 'wheel':
        return { route: 'Wheel' };
      case 'catalog':
        return { route: 'GamesCatalog' };
      default:
        return null;
    }
  } catch {
    return null;
  }
};
