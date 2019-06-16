import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
`;

const Header = ({ active }) => <div>lol</div>

Header.propTypes = {
  active: PropTypes.bool,
}

Header.defaultProps = {
  active: true,
}

export default Header
