export const APP_NAME = 'Dream7';
export const APP_SCHEME = 'dream7';
export const APP_DOMAIN = 'dream7.app';

export const STORAGE_PREFIX = '@dream7:';

export const DEFAULT_GRID_COLUMNS = 3;
export const DEFAULT_GRID_GAP = 12;

export const LINKS = {
  website: `https://${APP_DOMAIN}`,
  privacy: `https://${APP_DOMAIN}/privacy`,
  terms: `https://${APP_DOMAIN}/terms`,
};

export const REGEX = {
  deepLink: new RegExp(`^(${APP_SCHEME}:\\/\\/|https:\\/\\/${APP_DOMAIN})`, 'i'),
};
