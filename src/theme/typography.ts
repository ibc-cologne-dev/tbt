export type FontFamily = 'Avenir TBT';

export const fonts = {avenir: 'Avenir TBT'};

export type Font = keyof typeof fonts;

export const variants = {
  sm: {fontSize: 14, lineHeight: 16},
  md: {fontSize: 16, lineHeight: 25},
  lg: {fontSize: 18, lineHeight: 28},
  xl: {fontSize: 20, lineHeight: 22},
};

export type Variant = keyof typeof variants;
