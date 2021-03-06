require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `I'm Josh Newton`,
    description: `The personal site of Josh Newton.`,
    author: `@imjoshnewton`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `I'm Josh Newton`,
        short_name: `ImJoshNewton`,
        start_url: `/`,
        background_color: `#f2ebea`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/imjoshnewton.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Amiko", "Montserrat:400,700"],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`Amiko`, `Montserrat`],
    //     display: "swap",
    //   },
    // },
    {
      resolve: `gatsby-source-unsplash`,
      options: {
        appId: process.env.UNSPLASH_APP_ID, // `0b635e51b4da768609d6f2147a2b3a8e095d978ec6666b059c0b02c182919eba`,
        collections: [`6768256`],
        // optional: will only get page 1, so increase this count to include > 10 photos
        perPage: `100`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID, //`gvsclgjjlth9`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, //"RJzxZdxGxBdY-l9N1OfJhRDSYHRBDor6xEuYuTxnpbM",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-transformer-yaml`,
    // {
    //   resolve: `gatsby-source-remote-images`,
    //   options: {
    //     filter: node => node.internal.type === `UnsplashImagesYaml`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
