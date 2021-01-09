module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  siteMetadata: {
    title: "consoleclear",
    siteUrl: "https://www.consoleclear.com",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
