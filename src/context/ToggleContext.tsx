import * as React from "react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface IThemeContext {
  themeState: string;
  profileState: string;
  toggleTheme: () => void;
  toggleProfile: () => void;
}

const BLOG_TOGGLE = "blog_toggle";

const initialState: IThemeContext = {
  themeState: "lightTheme",
  profileState: "open",
  toggleTheme: () => {},
  toggleProfile: () => {},
};

export const ToggleContext =
  createContext<IThemeContext>(
    initialState
  );

const getInitialToggleState =
  (): IThemeContext => {
    if (typeof window === "undefined") {
      return initialState;
    }

    const storedState =
      localStorage.getItem(BLOG_TOGGLE);
    return storedState
      ? JSON.parse(storedState)
      : initialState;
  };

export const ToggleContextProvider: React.FC<
  React.PropsWithChildren<{}>
> = ({ children }) => {
  const [themeState, setThemeState] =
    useState(initialState.themeState);
  const [
    profileState,
    setProfileState,
  ] = useState(
    initialState.profileState
  );

  useEffect(() => {
    const localToggleState =
      getInitialToggleState();
    setThemeState(
      localToggleState.themeState
    );
    setProfileState(
      localToggleState.profileState
    );
  }, []);

  const toggleTheme = () => {
    const newThemeState =
      themeState === "lightTheme"
        ? "darkTheme"
        : "lightTheme";
    localStorage.setItem(
      BLOG_TOGGLE,
      JSON.stringify({
        ...initialState,
        themeState: newThemeState,
      })
    );
    setThemeState(newThemeState);
  };

  const toggleProfile = () => {
    const newProfileState =
      profileState === "open"
        ? "close"
        : "open";
    localStorage.setItem(
      BLOG_TOGGLE,
      JSON.stringify({
        ...initialState,
        profileState: newProfileState,
      })
    );
    setProfileState(newProfileState);
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
};

export const useToggleContext = () =>
  useContext(ToggleContext);
