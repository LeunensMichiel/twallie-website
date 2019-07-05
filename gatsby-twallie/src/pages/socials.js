import React from 'react'
import styled from 'styled-components'
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
  height: 66%;
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
  height: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SocialItems = styled.div`
  width: 85px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
  padding-right: 16px;
  border-right: 2px solid ${colors.backgroundaccent};

  .insta {
    font-size: 69px;
    color: ${colors.backgroundaccent};
    transition: 0.3s ease;
    &:hover {
      cursor: pointer;
      color: #e4405f;
    }
  }
  .spotify {
    font-size: 69px;
    color: ${colors.backgroundaccent};
    transition: 0.3s ease;
    &:hover {
      cursor: pointer;
      color: #1db954;
    }
  }
  .sc {
    font-size: 69px;
    color: ${colors.backgroundaccent};
    transition: 0.3s ease;
    &:hover {
      cursor: pointer;
      color: #ff5501;
    }
  }
`
const SocialBlock = styled.div`
  width: 100%;
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
              <a onClick={e => this.changeSocialBlock(0)}>
                <IconContext.Provider value={{ className: 'insta' }}>
                  <FaInstagram />
                </IconContext.Provider>
              </a>
              <a onClick={e => this.changeSocialBlock(1)}>
                <IconContext.Provider value={{ className: 'sc' }}>
                  <FaSoundcloud />
                </IconContext.Provider>
              </a>
              <a onClick={e => this.changeSocialBlock(2)}>
                <IconContext.Provider>
                  <IconContext.Provider value={{ className: 'spotify' }}>
                    <FaSpotify />
                  </IconContext.Provider>
                </IconContext.Provider>
              </a>
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
