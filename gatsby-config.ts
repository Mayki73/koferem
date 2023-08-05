import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `koferem`,
    siteUrl: `https://www.koferem.by`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["GTM-PS3F7MK"], // Replace GTM-XXXXXXX with your GTM container ID
        gtagConfig: {
          // Additional gtag.js configuration (optional)
          anonymize_ip: true, // Anonymize IP addresses
        },
        pluginConfig: {
          // Additional plugin configuration (optional)
          head: true, // Place GTM script in the head (recommended)
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["GTM-NB3DKQBK"], // Replace GTM-YYYYYYY with your second GTM container ID
        gtagConfig: {
          // Additional gtag.js configuration for the second GTM (optional)
          anonymize_ip: true, // Anonymize IP addresses
        },
        pluginConfig: {
          // Additional plugin configuration for the second GTM (optional)
          head: true, // Place GTM script in the head (recommended)
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Koferem",
        short_name: "koferem",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "static/icon.png", // Path to your favicon
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
};

export default config;
