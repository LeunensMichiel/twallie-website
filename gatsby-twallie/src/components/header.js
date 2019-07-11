import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import colors from './colors'
import { device } from './device'

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-top: 20px;

  @media ${device.tablet} {
    margin-top: 40px;
  }
`

const StyledLink = styled(Link)`
  color: ${colors.foreground};
  text-transform: capitalize;
  text-decoration: none;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
  margin-right: ${props => (props.last === 'true' ? '0' : '40px')};
  transition: all ease 0.3s;

  &:hover {
    color: ${colors.secondaryaccent};
    transition: all ease 0.1s;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }
`

const Header = () => (
  <Navigation>
    <StyledLink to="/" activeStyle={{ borderColor: colors.secondaryaccent }}>
      BOEKING
    </StyledLink>
    <StyledLink
      last="true"
      to="/socials"
      activeStyle={{ borderColor: colors.secondaryaccent }}
    >
      SOCIALS
    </StyledLink>
  </Navigation>
)

export default Header
