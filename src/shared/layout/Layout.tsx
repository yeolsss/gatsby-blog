import * as React from "react";
import { ThemeProvider } from "styled-components";
import Category from "../../components/category/Category";
import Profile from "../../components/profile";
import {
  ToggleContextProvider,
  useToggleContext,
} from "../../context/ToggleContext";
import { GlobalFonts } from "../style/GlobalFonts";
import { GlobalStyles } from "../style/GlobalStyles";
import { darkTheme, lightTheme } from "../style/theme/theme";
import Footer from "./footer";
import Header from "./header";
import * as St from "./layout.styled";

interface ILayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  location: Location;
}

const Layout = ({ children, pageTitle, location }: ILayoutProps) => {
  return (
    <ToggleContextProvider>
      <InnerLayout
        children={children}
        pageTitle={pageTitle}
        location={location}
      />
    </ToggleContextProvider>
  );
};

const InnerLayout = ({ children, pageTitle, location }: ILayoutProps) => {
  const { themeState } = useToggleContext();
  return (
    <ThemeProvider theme={themeState === "darkTheme" ? darkTheme : lightTheme}>
      <GlobalFonts />
      <GlobalStyles />
      <St.Container>
        <Header pageTitle={pageTitle} location={location} />
        <St.LayoutWrapper>
          {/* profile  */}
          <Profile />
          {/* Category */}
          <Category />

          <St.Main>
            {children}
            <Footer />
          </St.Main>
        </St.LayoutWrapper>
      </St.Container>
    </ThemeProvider>
  );
};

export default Layout;
