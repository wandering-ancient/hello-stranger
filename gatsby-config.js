module.exports = {
  pathPrefix: "/hello-stranger",
  siteMetadata: {
    title: "encrypted-static"
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    }
  ]
};
