import * as React from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";
import Seo from "../shared/seo";

const IndexPage: React.FC<PageProps> = ({ location: Location }) => {
  navigate("/home");
  return <></>;
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;
