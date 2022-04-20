import {colors as themeColors} from './colors';
import {spacing as themeSpacing} from './spacing';

// Force some globa variable definition from the first time the hook is called
// in our case from App.tsx
const colors = themeColors;
const spacing = themeSpacing;

export const useTheme = () => {
  return {colors, spacing};
};
