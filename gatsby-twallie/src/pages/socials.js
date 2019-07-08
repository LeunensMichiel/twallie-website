import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { FaSoundcloud, FaSpotify, FaInstagram } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import InstaBlock from '../components/socials/InstaBlock'
import SoundcloudBlock from '../components/socials/SouncloudBlock'
import SpotifyBlock from '../components/socials/SpotifyBlock'

import Layout from '../components/layout'
import SEO from '../components/seo'
import colors from '../components/colors'

const Background = styled.div`
  background-image: url(${props => (props.imgSrc ? props.imgSrc : '')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 580px;
  position: absolute;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(22, 25, 25, 0.45) 0%,
      rgba(22, 25, 25, 1) 95%,
      rgba(22, 25, 25, 1) 100%
    );
  }
`

const SocialsContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SocialItems = styled.div`
  width: 85px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
  padding-right: 16px;
  border-right: 2px solid ${colors.backgroundaccent};
`
const SocialBlock = styled.div`
  width: 834px;
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
    this.handleWheel = this.handleWheel.bind(this)
  }

  componentDidMount() {
    window.addEventListener('wheel', _.debounce(this.handleWheel, 200), {
      passive: true,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel)
  }

  handleWheel(event) {
    const { component } = this.state
    if (event.deltaY < 0) {
      component === 0
        ? this.setState({ component: 2 })
        : this.setState({ component: (this.state.component - 1) % 3 })
    }
    if (event.deltaY > 0) {
      this.setState({ component: (this.state.component + 1) % 3 })
    }
  }

  changeSocialBlock = number => {
    this.setState({
      component: number || 0,
    })
  }

  render() {
    const { data } = this.props
    const { component } = this.state
    return (
      <>
        <Background
          imgSrc={data.strapiPage.pageBackground.childImageSharp.fluid.src}
        />{' '}
        <Layout>
          <SEO
            title="Socials"
            description="Socials van Deejay Twallie // Socials Pagina"
            lang="nl"
          />
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
                <SoundcloudBlock />
              ) : (
                <SpotifyBlock />
              )}
            </SocialBlock>
          </SocialsContainer>
        </Layout>
      </>
    )
  }
}

export const pageQuery = graphql`
  query socialsPageQuery {
    strapiPage(type: { eq: "socials" }) {
      id
      type
      twallieDescription
      pageBackground {
        id
        childImageSharp {
          fluid(quality: 77, maxWidth: 2048, fit: COVER) {
            src
          }
        }
      }
    }
  }
`
