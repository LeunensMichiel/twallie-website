module.exports = {
  siteMetadata: {
    title: `Twallie Officiële Site`,
    description: `De officiële website van de Belgische DJ: Twallie. Boek hem hier, of kom meer over hem te weten.`,
    author: `@LeunensMichiel`,
    url: `https://www.deejaytwallie.com`,
    keywords: [
      `Tijl`,
      `Itterbeek`,
      `dj`,
      `muziek`,
      `all-round`,
      `Dilbeek`,
      `Vlaams-Brabant`,
      `Brussel`,
      `Vlaams-Brabant`,
      `deejay`,
      `plaatjes`,
      `MNM`,
      `fuif`,
      `event`,
      `twallie`,
      `winnaar`,
    ],
    },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Twallie Official Site`,
        short_name: `Twallie`,
        start_url: `/`,
        background_color: `#161919`,
        theme_color: `#161919`,
        display: `standalone`,
        icon: `src/images/twallie-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
