import * as React from "react";
import * as St from "./layout.styled";
import { GlobalStyles } from "../style/GlobalStyles";
import { GlobalFonts } from "../style/GlobalFonts";
import { ThemeProvider } from "styled-components";
import Header from "../../components/header";
import Profile from "../../components/profile";
import { useThemeContext } from "../../context/themeContext";
import { darkTheme, lightTheme } from "../style/theme/theme";

interface ILayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  location: Location;
}

const Layout = ({ children, pageTitle, location }: ILayoutProps) => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme === "darkTheme" ? darkTheme : lightTheme}>
      <GlobalFonts />
      <GlobalStyles />
      <St.Container>
        <Header pageTitle={pageTitle} location={location} />
        {/* profile  */}
        <Profile />
        <St.Main>{children}</St.Main>
      </St.Container>
    </ThemeProvider>
  );
};

export default Layout;
