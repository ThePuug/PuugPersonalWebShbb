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
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
      resolve: 'gatsby-transformer-yaml-full',
      options: {
        plugins: [
          {
            resolve: 'gatsby-yaml-full-markdown'
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `./src/data/`,
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-antd',
    {
      resolve: "@ccalamos/gatsby-source-googlemaps-static",
      options: {
        key: `${process.env.GOOGLE_API_KEY}`,
        center: "PVFJ+2H South Hill, Virginia, United States",
        zoom: 16,
        query: "South Hill Bread Box, South Hill, Virginia, United States",
        scale: 2,
        size: "480x270",
        markers: [
          {
            location: 'PVFJ+2H South Hill, Virginia, United States',
          }
        ]
      }
    },
  ],
};
