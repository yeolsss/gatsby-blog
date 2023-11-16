import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

interface ISeoProps {
  title: string;
}
const Seo: React.FC<ISeoProps> = ({ title }: ISeoProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};
export default Seo;
