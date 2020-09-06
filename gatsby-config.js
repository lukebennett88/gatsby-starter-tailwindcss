const dotenv = require('dotenv');
const postCssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const resolveConfig = require('tailwindcss/resolveConfig');

const tailwindConfig = require('./tailwind.config.js');

// Get Tailwind values so we can use them in JS
const fullConfig = resolveConfig(tailwindConfig);

// Set up `dotenv` so that we can use `.env.development` and/or `.env.production` to store environment variables
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Declare variables so these values can be reused
const title = 'Gatsby Starter Tailwind';
const siteUrl = 'https://gatsby-starter-tailwindcss.netlify.com';

module.exports = {
  siteMetadata: {
    title,
    description: 'Gatsby starter styled with Tailwind.',
    author: '@luke_bennett_',
    siteUrl,
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter TailwindCSS',
        short_name: 'Gatsby Starter',
        start_url: '/',
        background_color: fullConfig.theme.colors.teal['600'],
        theme_color: fullConfig.theme.colors.teal['600'],
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          postCssImport,
          tailwindcss(tailwindConfig),
          autoprefixer,
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
  ],
};
