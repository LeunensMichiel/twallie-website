import React, { Component } from 'react'

export default class SouncloudBlock extends Component {
  render() {
    const { embedUrl } = this.props

    return (
      <>
        <iframe
          title="soundcloud block"
          width="100%"
          height="100%"
          className="iframes"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={
            embedUrl ||
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/551106672&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          }
        ></iframe>
      </>
    )
  }
}
