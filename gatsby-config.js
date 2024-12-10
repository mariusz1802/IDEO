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
    "gatsby-plugin-styled-components",
  ],
};
