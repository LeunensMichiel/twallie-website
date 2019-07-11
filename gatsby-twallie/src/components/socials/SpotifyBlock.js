import React, { Component } from 'react'

export default class SpotifyBlock extends Component {
  render() {
    return (
      <>
        <iframe
          title="spotifyblock"
          src="https://open.spotify.com/embed/playlist/5tBYrn9DYwU3kZdMvFncSN"
          className="iframes"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </>
    )
  }
}
