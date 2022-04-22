export type FontFamily = 'Avenir TBT' | 'Alisha';

export const fonts = {
  avenir: 'Avenir TBT',
  avenirBlack: 'Avenir TBT',
  alisha: 'Alisha',
};

export type Font = keyof typeof fonts;

export const variants = {
  sm: {fontSize: 10, lineHeight: 16},
  md: {fontSize: 16, lineHeight: 24},
  lg: {fontSize: 18, lineHeight: 28},
  xl: {fontSize: 32},
};

export const letterSpacing: Record<keyof typeof variants, number> = {
  sm: -0.3,
  md: -0.7,
  lg: -0.9,
  xl: -1.1,
};

export type Variant = keyof typeof variants;
