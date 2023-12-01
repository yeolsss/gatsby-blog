import * as React from "react";
import * as St from "./themeButton.styled";
import { CiDark, CiLight } from "react-icons/ci";
import { useThemeContext } from "../../../context/themeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeContext();

  const handleOnClickTheme = () => {
    toggleTheme();
  };

  return (
    <St.ThemeButtonWrapper>
      <button onClick={handleOnClickTheme}>
        {theme === "lightTheme" ? <CiLight /> : <CiDark />}
      </button>
    </St.ThemeButtonWrapper>
  );
};

export default ThemeButton;
