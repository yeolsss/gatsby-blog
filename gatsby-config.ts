import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-blog`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "Yoels Blog",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve:
              "gatsby-remark-images",
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    {
      resolve:
        "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}

export default config
