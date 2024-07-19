import React, { useState, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles'; 
import { themeCreator } from './base';

export const ThemeContext = React.createContext(
  (_themeName: string): void => {}
);

interface ThemeProviderWrapperProps {
  children: ReactNode; 
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = (props) => {
  const curThemeName =  'PureLightTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
 _setThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;