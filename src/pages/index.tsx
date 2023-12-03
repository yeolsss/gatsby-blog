import { navigate, type HeadFC, type PageProps } from "gatsby";
import * as React from "react";
import Seo from "../shared/seo";

const IndexPage: React.FC<PageProps> = ({ location: Location }) => {
  React.useEffect(() => {
    navigate("/home");
  }, []);
  return <></>;
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;
