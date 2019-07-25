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
  margin-right: ${props => (props.last === 'true' ? '0' : '40px')};
  transition: 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  transform-origin: 100% 50%;

  &:hover {
    color: ${colors.secondaryaccent};
  }

  &.active {
    &:after {
      display: block;
      content: '';
      margin-top: 4px;
      height: 2px;
      background: ${colors.secondaryaccent};
      width: 100%;
      transform: scaleX(1);
    }
  }

  &:after {
    display: block;
    content: '';
    margin-top: 4px;
    height: 2px;
    background: ${colors.secondaryaccent};
    transform: scaleX(0);
    transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    transform-origin: 0% 50%;
  }

  &:hover:after,
  &:focus:after {
    transform: scaleX(1);
  }

  @media (min-width: 370px) {
    font-size: 18px;
  }

  @media ${device.tablet} {
    font-size: 24px;
  }
`

const Header = () => (
  <Navigation>
    <StyledLink to="/" activeClassName="active">
      BOEKING
    </StyledLink>
    <StyledLink last="true" to="/socials" activeClassName="active">
      SOCIALS
    </StyledLink>
  </Navigation>
)

export default Header
