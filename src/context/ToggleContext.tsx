// init settings
import * as React from "react";
import {
  createContext,
  useContext,
  useState,
} from "react";

export interface IThemeContext {
  themeState: string;
  profileState: string;
  toggleTheme: () => void;
  toggleProfile: () => void;
}

interface ILocalStorage {
  themeState: string;
  profileState: string;
}

interface IToggleProviderProps
  extends React.PropsWithChildren<{}> {}

const BLOG_TOGGLE = "blog_toggle";

const initialState: IThemeContext = {
  themeState: "lightTheme",
  profileState: "open",
  toggleTheme: () => {},
  toggleProfile: () => {},
};
// create provider
export const ToggleContext =
  createContext(initialState);

// create context

export function ToggleContextProvider({
  children,
}: IToggleProviderProps) {
  const isBrowser =
    typeof window !== "undefined";

  const localToggleState = isBrowser
    ? JSON.parse(
        localStorage.getItem(
          BLOG_TOGGLE
        )!
      ) || {
        themeState: "lightTheme",
        profileState: "open",
      }
    : {
        themeState: "lightTheme",
        profileState: "open",
      };

  const [themeState, setThemeState] =
    useState(
      localToggleState.themeState
    );
  const [
    profileState,
    setProfileState,
  ] = useState(
    localToggleState.profileState
  );

  const toggleTheme = () => {
    const settingTheme =
      themeState === "lightTheme"
        ? "darkTheme"
        : "lightTheme";
    localStorage.setItem(
      BLOG_TOGGLE,
      JSON.stringify({
        ...localToggleState,
        themeState: settingTheme,
      })
    );
    setThemeState(settingTheme);
  };

  const toggleProfile = () => {
    const settingProfile =
      profileState === "open"
        ? "close"
        : "open";
    localStorage.setItem(
      BLOG_TOGGLE,
      JSON.stringify({
        ...localToggleState,
        profileState: settingProfile,
      })
    );
    setProfileState(settingProfile);
  };

  const value = {
    themeState,
    profileState,
    toggleTheme,
    toggleProfile,
  };
  return (
    <ToggleContext.Provider
      value={value}
    >
      {children}
    </ToggleContext.Provider>
  );
}

export const useToggleContext = () =>
  useContext(ToggleContext);
