/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `IDEO`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        root: path.join(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Raleway",
            weights: ["100", "200", "300", "400", "500", "700", "600", "900"],
          },
          {
            family: "Agbalumo",
            weights: ["500"],
          },
          {
            family: "Monsterrat",
            weights: ["100", "200", "300", "400", "500", "700", "600", "900"],
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
        },
      },
    },
    `gatsby-plugin-image`,

    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-styled-components",
  ],
};
