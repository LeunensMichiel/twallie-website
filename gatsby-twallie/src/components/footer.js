import React from 'react'
import styled from 'styled-components'
import {
  FaMugHot,
  FaFacebookSquare,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import colors from './colors'
import { device } from './device'

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 12px;
  align-items: center;
  justify-items: center;
  position: absolute;
  z-index: 5;
  bottom: 20px;
  left: 0;
  right: 0;

  @media ${device.laptop} {
    bottom: 40px;
    grid-row-gap: 18px;
  }
`
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  max-width: 160px;
  width: 100%;

  .footer-logo {
    color: ${colors.foreground};
    font-size: 24px;
    transition: ease 0.3s;

    &:hover,
    &:focus {
      color: ${colors.secondaryaccent};
      transition: ease 0.2s;
    }

    &:hover {
      cursor: pointer;
    }
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: ${colors.foreground};
  transition: ease 0.3s;

  &:hover {
    color: ${colors.secondaryaccent};
  }
`

const FooterText = styled.small``

const date = new Date().getFullYear()

const Footer = () => (
  <StyledFooter>
    <Flex>
      <IconContext.Provider value={{ className: 'footer-logo' }}>
        <a
          href="https://www.facebook.com/deejaytwallie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/deejaytwallie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://soundcloud.com/deejaytwallie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSoundcloud />
        </a>
        <a
          href="https://open.spotify.com/playlist/5tBYrn9DYwU3kZdMvFncSN?si=UEu64_MWTtWloGEw7uGCxg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify />
        </a>
      </IconContext.Provider>{' '}
    </Flex>
    <FooterText>
      &copy; Twallie {date}. Made with{' '}
      <IconContext.Provider value={{ color: colors.secondaryaccent }}>
        <FaMugHot />
      </IconContext.Provider>{' '}
      by{' '}
      <StyledLink href="https://leunesmedia.netlify.com" target="_blank">
        Leunes Media
      </StyledLink>
    </FooterText>
  </StyledFooter>
)

export default Footer
