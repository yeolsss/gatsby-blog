import * as React from "react";
import * as St from "./layout.styled";
import { GlobalStyles } from "../../shared/style/GlobalStyles";
import { GlobalFonts } from "../../shared/style/GlobalFonts";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../shared/style/theme/theme";
import Header from "../header";
import Profile from "./profile";

interface ILayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  location: Location;
}

const Layout = ({ children, pageTitle, location }: ILayoutProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
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
