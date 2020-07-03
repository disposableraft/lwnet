module.exports = {
  siteMetadata: {
    title: `Lance W`,
    description: `Humble internet abode.`,
    author: `Lance Wakeling`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contentImages`,
        path: `${__dirname}/src/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/writing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `privateCirculation`,
        path: `${__dirname}/src/pdf/private-circulation`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Lance Wakeling",
        short_name: "Lance Wakeling",
        start_url: "/",
        background_color: "ghostwhite",
        theme_color: "ghostwhite",
        display: "browser",
        icon: "src/static/favicon-32x32.png",
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-chakra-ui`,
      options: {
        isUsingColorMode: false,
      },
    },
  ],
}
