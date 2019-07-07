import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SoundCloudPlayer from './SoundCloudPlayer'

export class SouncloudBlock extends Component {
  render() {
    const twallieUrl =
      'https://soundcloud.com/deejaytwallie/yearmix-2k18-selected-by-twallie'
    const { data } = this.props
    const clientId = process.env.SC_CLIENT_ID || ''

    return (
      <>
        <SoundCloudPlayer
          clientId={clientId}
          resolveUrl={twallieUrl}
          imgSrc={data.file.childImageSharp.fluid.src}
          {...this.props}
        />
      </>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query scImage {
        file(relativePath: { eq: "sc.jpg" }) {
          childImageSharp {
            fluid(quality: 77, maxWidth: 1024) {
              src
            }
          }
        }
      }
    `}
    render={data => <SouncloudBlock data={data} />}
  />
)
