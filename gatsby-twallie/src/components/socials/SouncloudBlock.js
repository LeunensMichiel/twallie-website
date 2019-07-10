import React, { Component } from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import SoundCloudPlayer from './SoundCloudPlayer'

export default class SouncloudBlock extends Component {
  render() {
    // const twallieUrl =
    //   'https://soundcloud.com/deejaytwallie/yearmix-2k18-selected-by-twallie'
    // const { data } = this.props
    // const clientId = process.env.SC_CLIENT_ID || ''

    return (
      <>
        <iframe
          title="soundcloud block"
          width="100%"
          height="380"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/551106672&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        {/* <SoundCloudPlayer
          clientId={clientId}
          resolveUrl={twallieUrl}
          imgSrc={data.file.childImageSharp.fluid.src}
          {...this.props}
        /> */}
      </>
    )
  }
}

// export default props => (
//   <StaticQuery
//     query={graphql`
//       query scImage {
//         file(relativePath: { eq: "sc.jpg" }) {
//           childImageSharp {
//             fluid(quality: 77, maxWidth: 1024) {
//               src
//             }
//           }
//         }
//       }
//     `}
//     render={data => <SouncloudBlock data={data} />}
//   />
// )
