import { createTheme, ThemeOptions, Theme } from '@mui/material';
import { forEach, merge } from 'lodash';
import { themeColors } from './themeColors';
import themeOptions from './themeOptions';

// Define the type for theme colors
interface ThemeColors {
  [key: string]: Partial<ThemeOptions>;
}

// Ensure themeColors is properly typed
const typedThemeColors: ThemeColors = themeColors;

function createMatxThemes(): { [key: string]: Theme } {
  let themes: { [key: string]: Theme } = {};

  forEach(typedThemeColors, (value, key) => {
    const mergedOptions: ThemeOptions = merge({}, themeOptions, value);
    themes[key] = createTheme(mergedOptions);
  });

  return themes;
}

export const themes = createMatxThemes();
