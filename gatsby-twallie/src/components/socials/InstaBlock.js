import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class InstaBlock extends Component {
  render() {
    return (
      <>
        <Helmet>
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        </Helmet>
        <iframe
          title="instagramblock"
          src="//lightwidget.com/widgets/1a92ca7fabcb5406bc4c85a8daa7a110.html"
          scrolling="no"
          allowtransparency="true"
          className="lightwidget-widget"
        ></iframe>
      </>
    )
  }
}
