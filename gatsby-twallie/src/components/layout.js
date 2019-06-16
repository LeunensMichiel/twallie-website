import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from './header'
import '../stylesheets/layout.scss'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 69px);
  grid-gap: 0 20px;

  * {
    grid-column: col-start / span 12;
  }
`

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
