import React, { Component } from 'react'

export default class SpotifyBlock extends Component {
  render() {
    return (
      <>
        <iframe
          src="https://open.spotify.com/playlist/5tBYrn9DYwU3kZdMvFncSN?si=U5GH9pIMSRa7zte3VZfCuw"
          width="100%"
          height="100%"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </>
    )
  }
}
