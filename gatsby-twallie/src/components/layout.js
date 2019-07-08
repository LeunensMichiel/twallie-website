import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import '../stylesheets/layout.scss'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 69px);
  grid-gap: 0 16px;
  > * {
    grid-column: col-start / span 12;
  }
`

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
    <Footer />
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
