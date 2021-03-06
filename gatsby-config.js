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
    image: "/static/images/socialCard.png",
    favicon: {
      ico: "/uploads/favicon.ico",
      sm: "/uploads/favicon-16x16.png",
      lg: "/uploads/favicon-32x32.png",
    },
    twitterUsername: `@chemtocode`,
    keywords: [
      "React",
      "Gatsby",
      "ChemToCode",
      "ConsoleClear",
      "Mental Health",
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-breakpoints",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 500,
      },
    },
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
