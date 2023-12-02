import * as React from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { useToggleContext } from "../../../context/ToggleContext";
import * as St from "./themeButton.styled";

const ThemeButton = () => {
  const { themeState, toggleTheme } = useToggleContext();
  const handleOnClickTheme = () => {
    toggleTheme();
  };

  return (
    <St.ThemeButtonWrapper>
      <button onClick={handleOnClickTheme}>
        {themeState === "lightTheme" ? <CiLight /> : <CiDark />}
      </button>
    </St.ThemeButtonWrapper>
  );
};

export default ThemeButton;
