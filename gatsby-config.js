module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
        options: {
          // Your GraphCMS API endpoint. Available from your project settings.
          endpoint: 'https://api-eu-central-1.graphcms.com/v2/cl2d228xc4o8c01z8f2ej5iuo/master',
          // A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
          token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTA3OTA1NDAsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsMmQyMjh4YzRvOGMwMXo4ZjJlajVpdW8vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMmI2OTc5MzMtZGVmOS00NGRlLWI5ZWItOGQxMTlkZjAwZDEyIiwianRpIjoiY2tnODM1b2FwcjRmaTAxd2U5OGpsNzgwdCJ9.gLt3KEWbvgaoJRUyTAnWVrGjJ4Dn6sJtW1JxnrUwqJsid_sn1o3WYOQX65RGYMOfIKot9MVA8v8UvHPK14ZxbEG7eldRhfH58c-q0Ikk9G9HRb6q1mwg-PaX_fZuLsHGBCj1XQSR1OZHvCd-1NFzjp4sTixqOiWtJWxkJsbdyNgYkUY6_QPouIBqQ0vcUNyDxB1eQMERG_ETVF40DY3kU3j28XIFwBDQCL7UAH9iVxURXzYXnmyDSqyCbVLMb74TaOWZtDGFyPW3RLZVV25rfI8T90wD6gxZGqYLpwb5ALUW8989YH5AamtEhvO74OU9Ccp27KlVYSAry-dnYzDM9VgEjwnJ76knHoIDTxV8MH7g5uPZKxAGpI0YAyBSSSq6NNZnNsSHpcWH98TuddlR1mLj92fJratnlty7M5cxD1MZzyx1DdxaxAogCJQiliONZcmlcJllcPrl0PbLPT-XJF2CTwWaCZ2KHwaDmGJyddRJbb_h1i_LUuiHDObS8p_P7H3K_R-jH7pgBT7Uo6UoC42NY_MHGuV_u9mFH75Hy0eaYD62H67xhB7LGMympvpjwem3OUHaYGNs2ocUgsDD2Dd5qwjIwRP2qeoL38BFtIe6R0FSVd1owfAVqjmFY9Wdtm0d0gXhM4gn8H-6HQhDZ1toAx6el_9VmWFfoq-lYb0'
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
