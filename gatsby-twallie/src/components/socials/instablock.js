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
          src="//lightwidget.com/widgets/f878570687cc58958ac133b699d692cf.html"
          scrolling="no"
          allowtransparency="true"
          className="lightwidget-widget"
          title="instagramblock"
        ></iframe>
      </>
    )
  }
}
