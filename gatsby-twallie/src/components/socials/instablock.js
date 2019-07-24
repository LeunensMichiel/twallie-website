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
          src="https://cdn.lightwidget.com/widgets/67bcdbd9f602576fa6a61a3d5fdbea9c.html"
          scrolling="no"
          allowtransparency="true"
          className="lightwidget-widget"
          title="instagramblock"
        ></iframe>
      </>
    )
  }
}
