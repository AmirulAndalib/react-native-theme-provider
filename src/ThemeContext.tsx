import * as React from 'react';

import {
  ExtractThemeNames,
  ThemeContextProps,
  ThemeContextValue,
  ThemeDispatchContextValue,
  Themes,
} from './types';

export const ThemeContext = React.createContext<ThemeContextValue<any> | null>(
  null,
);

export const ThemeDispatchContext = React.createContext<ThemeDispatchContextValue<
  any
> | null>(null);

export function ThemeProvider<T extends Themes>({
  children,
  initialTheme,
  themes,
}: ThemeContextProps<T>) {
  const [themeName, setThemeName] = React.useState<ExtractThemeNames<T>>(
    initialTheme,
  );

  const changeTheme = (t: any) => {
    setThemeName(t);
  };

  return (
    <ThemeContext.Provider value={{ selectedTheme: themeName, themes }}>
      <ThemeDispatchContext.Provider value={{ setTheme: changeTheme }}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}