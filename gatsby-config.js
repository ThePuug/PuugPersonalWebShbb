require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: "Southhill Bread Box",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "271062153"
        ]
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        failOnError: false, // workaround for the moment
      }
    },
    'gatsby-plugin-antd',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-transformer-yaml-full',
      options: {
        plugins: [
          'gatsby-yaml-full-markdown'
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `./src/data/`,
      }
    },
    {
      resolve: "@ccalamos/gatsby-source-googlemaps-static",
      options: {
        key: `${process.env.GOOGLEMAPS_API_KEY}`,
        center: "South Hill Bread Box, Virginia, United States",
        zoom: 15,
        scale: 2,
        size: "480x270",
        secret: `${process.env.GOOGLEMAPS_API_SECRET}`,
        markers: [
          {
            location: 'South Hill Bread Box, Virginia'
          }
        ],
      }
    },
  ],
};
