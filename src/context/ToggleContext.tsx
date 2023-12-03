import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";

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

export const ToggleContext = createContext<IThemeContext>(initialState);

// 서버 사이드 렌더링 환경에서 window 객체의 존재 여부를 확인하는 함수
const getInitialToggleState = (): IThemeContext => {
  if (typeof window === "undefined") {
    return initialState;
  }

  const storedState = localStorage.getItem(BLOG_TOGGLE);
  return storedState ? JSON.parse(storedState) : initialState;
};

export const ToggleContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [themeState, setThemeState] = useState(initialState.themeState);
  const [profileState, setProfileState] = useState(initialState.profileState);

  useEffect(() => {
    const localToggleState = getInitialToggleState();
    setThemeState(localToggleState.themeState);
    setProfileState(localToggleState.profileState);
  }, []);

  // 테마 상태를 토글하는 함수
  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      const newThemeState =
        themeState === "lightTheme" ? "darkTheme" : "lightTheme";
      localStorage.setItem(
        BLOG_TOGGLE,
        JSON.stringify({
          ...initialState,
          themeState: newThemeState,
        })
      );
      setThemeState(newThemeState);
    }
  };

  // 프로필 상태를 토글하는 함수
  const toggleProfile = () => {
    if (typeof window !== "undefined") {
      const newProfileState = profileState === "open" ? "close" : "open";
      localStorage.setItem(
        BLOG_TOGGLE,
        JSON.stringify({
          ...initialState,
          profileState: newProfileState,
        })
      );
      setProfileState(newProfileState);
    }
  };

  const value = {
    themeState,
    profileState,
    toggleTheme,
    toggleProfile,
  };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};

export const useToggleContext = () => useContext(ToggleContext);
