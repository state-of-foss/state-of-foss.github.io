const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: `https://state-of-foss.in`,
    title: "The State of FOSS in India · CivicDataLab",
    description:
      "A chronicle of the evolution of the FOSS ecosystem in India, identifying key stakeholders, list out their challenges and recommendations. Supported by Omidyar Network India",
    url: "https://state-of-foss.in/", // No trailing slash allowed!
    image: "https://state-of-foss.in/images/landing-page-img.png", // Path to your image you placed in the 'static' folder
    social: {
      twitter: "@StateOfFOSS"
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-2V1FDMQKDM", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'content')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`)
    //   }
    // },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
