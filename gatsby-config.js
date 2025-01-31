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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "downloads",
        path: `${__dirname}/src/assets/download`,
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
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Agbalumo`,
            file: `https://fonts.googleapis.com/css2?family=Agbalumo&display=swap`,
          },
          {
            name: `Raleway`,
            file: `https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap`,
          },
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap`,
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
    "gatsby-plugin-loadable-components-ssr",
    `gatsby-plugin-image`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-styled-components",
  ],
};
