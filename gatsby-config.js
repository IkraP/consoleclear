module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  siteMetadata: {
    title: "consoleclear",
    siteUrl: "https://www.consoleclear.com",
    description: `A mental health application that aims to reduce anxiety through meditation, breaks and links for help`,
    author: `IkraP`,
    lang: `en`,
    // image: "https://www.chemtocode.co.uk/uploads/socialCard.png",
    // favicon: {
    //   ico: "/uploads/favicon.ico",
    //   sm: "/uploads/favicon-16x16.png",
    //   lg: "/uploads/favicon-32x32.png",
    // },
    // twitterUsername: `@chemtocode`,
    // keywords: ["React", "Gatsby", "ChemToCode", "blog", "portfolio"],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },

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
  ],
};
