require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: "Southhill Bread Box",
    siteUrl: "https://ashy-stone-03dbf680f.azurestaticapps.net"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-transformer-remark',
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
            location: 'South Hill Bread Box, Virginia, United States',
          }
        ]
      }
    },
    'gatsby-plugin-antd',
  ],
};
