import React, { Component } from 'react'

export default class SpotifyBlock extends Component {
  render() {
    return (
      <>
        <iframe
          src="https://open.spotify.com/embed/playlist/5tBYrn9DYwU3kZdMvFncSN"
          width="100%"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </>
    )
  }
}
