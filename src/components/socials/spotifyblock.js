import React, { Component } from 'react'

export default class SpotifyBlock extends Component {
  render() {
    const { embedUrl } = this.props

    return (
      <>
        <iframe
          title="spotifyblock"
          src={
            embedUrl ||
            'https://open.spotify.com/embed/playlist/5tBYrn9DYwU3kZdMvFncSN'
          }
          className="iframes"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </>
    )
  }
}
