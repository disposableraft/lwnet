module.exports = {
  siteMetadata: {
    title: `Lance W`,
    description: `Humble internet abode.`,
    author: `Lance Wakeling`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
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
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `privateCirculation`,
        path: `${__dirname}/src/pdf/private-circulation`,
      },
    },
    `gatsby-transformer-remark`,
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
    `gatsby-plugin-chakra-ui`,
  ],
}
