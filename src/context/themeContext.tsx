// init settings
import * as React from "react";
import { createContext, useContext, useState } from "react";

export interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps extends React.PropsWithChildren<{}> {}

const BLOG_THEME = "blogTheme";

const initialState: IThemeContext = {
  theme: "lightTheme",
  toggleTheme: () => {},
};
// create provider
export const ThemeContext = createContext(initialState);

// create context

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(
    localStorage.getItem(BLOG_THEME) || "lightTheme",
  );
  const toggleTheme = () => {
    console.log("toggleTheme");
    const settingTheme = theme === "lightTheme" ? "darkTheme" : "lightTheme";
    localStorage.setItem(BLOG_THEME, settingTheme);
    setTheme(settingTheme);
  };
  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
