module.exports = {
  siteMetadata: {
    siteName: `Siner's DevLog`,
    githubUrl: `https://github.com/siner308`,
  },
  plugins: [
    // `gatsby-plugin-typescript` is automatically included in gatsby
    // You only need to explicitly define it here if you need to configure
    // specific options in it
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true,
      },
    },
  ],
};