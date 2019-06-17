import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import colors from './colors'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 40px;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const Footer = () => (
  <StyledFooter>
    <p>Twallie 2019. Made with coffe by <a>Leunes Media</a></p>
  </StyledFooter>
)

export default Footer
