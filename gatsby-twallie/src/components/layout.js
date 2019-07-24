import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import '../stylesheets/layout.scss'
import { device } from './device'

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 10px;

  > * {
    grid-column: 1 / span 4;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0 16px;
    > * {
      grid-column: 1 / span 12;
    }
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
