import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from './colors'

const StyledLink = styled(Link)`
  background: none;
  border: 2px solid ${colors.foreground};
  border-radius: 4px;
  transition-duration: ease 0.3s;
  width: 154px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${colors.foreground};
  text-transform: uppercase;
  font-size: 18px;
  line-height: 27px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;

  &:before {
    position: relative;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
    width: 100%;
    height: 0;
    top: 50%;
    left: 50%;
    background: ${colors.secondaryaccent};
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }

  &:hover,
  &:active {
    cursor: pointer;
    border-color: ${colors.secondaryaccent};
    transition: all 0.3s;
  }

  &:hover:after {
    height: 260%;
    opacity: 1;
  }

  &:active:after {
    height: 400%;
    opacity: 1;
  }
`

const StyledButton = styled.a`
  background: none;
  border: 2px solid ${colors.foreground};
  border-radius: 4px;
  transition-duration: ease 0.3s;
  width: 154px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${colors.foreground};
  text-transform: uppercase;
  font-size: 18px;
  line-height: 27px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  z-index: 4;
  margin-top: ${props => (props.form === 1 ? '25px' : '0')};

  &:before {
    position: relative;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
    width: 100%;
    height: 0;
    top: 50%;
    left: 50%;
    background: ${colors.secondaryaccent};
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }

  &:hover,
  &:active {
    cursor: pointer;
    border-color: ${colors.secondaryaccent};
    transition: all 0.3s;
  }

  &:hover:after {
    height: 260%;
    opacity: 1;
  }

  &:active:after {
    height: 400%;
    opacity: 1;
  }
`

const Button = ({ text, linkTo, external, onClick, form }) => (
  <>
    {external ? (
      <StyledButton
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        form={form ? 1 : 0}
        type={form ? 'submit' : ''}
      >
        {text}
      </StyledButton>
    ) : (
      <StyledLink to={linkTo} onClick={onClick}>
        {text}
      </StyledLink>
    )}
  </>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  external: PropTypes.bool,
  onClick: PropTypes.func,
  form: PropTypes.bool,
}

Button.defaultProps = {
  text: `Button`,
  external: false,
}

export default Button
