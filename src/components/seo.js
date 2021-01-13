import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title }) {
  const { site, seoImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            keywords
          }
        }
        seoImage: file(relativePath: { eq: "seo.jpeg" }) {
          childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const metaUrl = site.siteMetadata.url

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s || ${site.siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: metaDescription,
          },
          {
            name: "keywords",
            content: site.siteMetadata.keywords.join(","),
          },
          {
            property: 'og:title',
            content: metaTitle,
          },
          {
            property: `og:url`,
            content: metaUrl,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: 'og:description',
            content: metaDescription,
          },
          {
            name: 'twitter:creator',
            content: site.siteMetadata.author,
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:site',
            content: '@deejaytwallie',
          },
          {
            name: 'twitter:description',
            content: metaDescription,
          },
        ]
          .concat(
            seoImage
              ? [
                  {
                    property: 'og:image',
                    content: `${site.siteMetadata.url}${seoImage.childImageSharp.original.src}`,
                  },
                  {
                    property: 'og:image:url',
                    content: `${site.siteMetadata.url}${seoImage.childImageSharp.original.src}`,
                  },
                  {
                    property: 'og:image:secure_url',
                    content: `${site.siteMetadata.url}${seoImage.childImageSharp.original.src}`,
                  },
                  {
                    property: 'og:image:width',
                    content: seoImage.childImageSharp.original.width,
                  },
                  {
                    property: 'og:image:height',
                    content: seoImage.childImageSharp.original.height,
                  },
                  {
                    property: 'og:image:type',
                    content: 'image/jpeg',
                  },
                  {
                    property: 'twitter:image',
                    content: `${site.siteMetadata.url}${seoImage.childImageSharp.original.src}`,
                  },
                  {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                  },
                ]
              : [
                  {
                    name: 'twitter:card',
                    content: 'summary',
                  },
                ]
          )
          .concat(meta)}
      />
    </>
  )
}

SEO.defaultProps = {
  lang: `nl`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
