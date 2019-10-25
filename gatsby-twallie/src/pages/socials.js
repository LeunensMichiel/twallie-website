import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { FaSoundcloud, FaSpotify, FaInstagram } from 'react-icons/fa'
import Img from 'gatsby-image/withIEPolyfill'
import { IconContext } from 'react-icons'
import InstaBlock from '../components/socials/instablock'
import SoundcloudBlock from '../components/socials/soundcloudblock'
import SpotifyBlock from '../components/socials/spotifyblock'

import Layout from '../components/layout'
import SEO from '../components/seo'
import colors from '../components/colors'
import { device } from '../components/device'

const Background = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 580px;

  .gatsby-image-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 4;
    background: linear-gradient(
      to bottom,
      rgba(22, 25, 25, 0.45) 0%,
      rgba(22, 25, 25, 1) 95%,
      rgba(22, 25, 25, 1) 100%
    );
  }
`

const SocialsContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;

  @media ${device.laptop} {
    margin-top: 100px;
    flex-direction: row;
    padding: 0;
  }
`

const SocialItems = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-evenly;
  border-bottom: 2px solid ${colors.backgroundaccent};
  padding-bottom: 16px;

  @media ${device.laptop} {
    width: 85px;
    height: 220px;
    flex-direction: column;
    padding-right: 16px;
    justify-content: space-between;
    border-right: 2px solid ${colors.backgroundaccent};
    border-bottom: none;
    padding-bottom: 0;
    margin-right: 5%;
  }
`
const SocialBlock = styled.div`
  margin: 5% 0;
  width: 100%;
  height: auto;
  margin-bottom: 100px;

  @media ${device.laptop} {
    margin-top: 0;
    margin-bottom: 10%;
    max-width: 834px;
  }
`

const StyledLink = styled.a`
  .insta {
    font-size: 69px;
    transition: 0.3s ease;
    color: ${props => (props.active ? '#e4405f' : colors.backgroundaccent)};

    &:hover {
      cursor: pointer;
      color: #e4405f;
    }
  }
  .spotify {
    color: ${props => (props.active ? '#1db954' : colors.backgroundaccent)};
    font-size: 69px;
    transition: 0.3s ease;
    &:hover {
      cursor: pointer;
      color: #1db954;
    }
  }
  .sc {
    color: ${props => (props.active ? '#ff5501' : colors.backgroundaccent)};
    font-size: 69px;
    transition: 0.3s ease;
    &:hover {
      cursor: pointer;
      color: #ff5501;
    }
  }
`

export default class SocialsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      component: 0,
    }

    this.changeSocialBlock = this.changeSocialBlock.bind(this)
  }

  changeSocialBlock = number => {
    this.setState({
      component: number || 0,
    })
  }

  render() {
    const data = this.props.data.allMarkdownRemark.edges[0].node.frontmatter
    const { component } = this.state
    return (
      <>
        <Background>
          <Img
            objectFit="cover"
            objectPosition="50% 50%"
            fluid={data.socialsImage.childImageSharp.fluid}
          />
        </Background>
        <Layout>
          <SEO title="Socials" description="Socials van Twallie" lang="nl" />
          <SocialsContainer>
            <SocialItems>
              <StyledLink
                onClick={e => this.changeSocialBlock(0)}
                active={component === 0}
              >
                <IconContext.Provider value={{ className: 'insta' }}>
                  <FaInstagram />
                </IconContext.Provider>
              </StyledLink>
              <StyledLink
                onClick={e => this.changeSocialBlock(1)}
                active={component === 1}
              >
                <IconContext.Provider value={{ className: 'sc' }}>
                  <FaSoundcloud />
                </IconContext.Provider>
              </StyledLink>
              <StyledLink
                onClick={e => this.changeSocialBlock(2)}
                active={component === 2}
              >
                <IconContext.Provider value={{ className: 'spotify' }}>
                  <FaSpotify />
                </IconContext.Provider>
              </StyledLink>
            </SocialItems>
            <SocialBlock>
              {component === 0 ? (
                <InstaBlock />
              ) : component === 1 ? (
                <SoundcloudBlock embedUrl={data.soundcloudUrl} />
              ) : (
                <SpotifyBlock embedUrl={data.spotifyUrl} />
              )}
            </SocialBlock>
          </SocialsContainer>
        </Layout>
      </>
    )
  }
}

export const pageQuery = graphql`
  query SocialsPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(socials)\\\\.+/" } }
    ) {
      edges {
        node {
          frontmatter {
            socialsImage {
              childImageSharp {
                fluid(quality: 77, maxWidth: 2048) {
                  presentationWidth
                  presentationHeight
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            spotifyUrl
            soundcloudUrl
          }
        }
      }
    }
  }
`
