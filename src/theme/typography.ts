import {Platform} from 'react-native';
export type FontFamily = 'Avenir TBT' | 'Alisha';

const isAndroid = Platform.OS === 'android';

export const fonts = {
  avenir: !isAndroid ? 'Avenir TBT' : 'Avenir-45-Book-TBT',
  avenirBlack: !isAndroid ? 'Avenir TBT' : 'Avenir-95-Black-TBT',
  alisha: !isAndroid ? 'Alisha' : 'Alisha-Regular',
};

export type Font = keyof typeof fonts;

export const variants = {
  sm: {fontSize: 10, lineHeight: 16},
  // TODO: trasform sm to xs and sm1 to sm
  sm1: {fontSize: 14, lineHeight: 22},
  md: {fontSize: 16, lineHeight: 24},
  lg: {fontSize: 18, lineHeight: 28},
  xl: {fontSize: 22},
};

export const letterSpacing: Record<keyof typeof variants, number> = {
  sm: -0.3,
  sm1: -0.5,
  md: -0.7,
  lg: -0.9,
  xl: -1.1,
};

export type Variant = keyof typeof variants;
