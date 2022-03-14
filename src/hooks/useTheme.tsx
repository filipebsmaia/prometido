import React, {
  createContext, useCallback, useContext, useMemo, useState
} from 'react';

import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';

import light from '@modules/theme/light';

const themes = [light];

type IThemeTitle = typeof themes[number]['title'];

interface IThemeContextData {
  theme: DefaultTheme;
  changeTheme(title: IThemeTitle): void;
}

const ThemeContext = createContext({} as IThemeContextData);

interface IThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(light);

  const changeTheme = useCallback((title: IThemeTitle) => {
    setCurrentTheme(themes.find((theme) => theme.title === title) || light);
  }, []);

  const value = useMemo(() => ({ theme: currentTheme, changeTheme }), [changeTheme, currentTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = (): IThemeContextData => useContext(ThemeContext);

export { ThemeProvider, useTheme };
