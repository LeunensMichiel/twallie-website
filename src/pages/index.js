import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/button'
import TwallieModal from '../components/home/twalliemodal'
import ContactMe from '../components/home/contact'
import { device } from '../components/device'

import Icon from '../images/twallie-logo.svg'

const LandingContainer = styled.div`
  padding: 0 2em;
  margin: 5vh 0;

  @media (min-width: 370px) {
    margin: 10vh 0;
  }

  @media ${device.mobileSLandscape} {
    margin: 0;
    svg {
      width: 66%;
      margin: 0 auto;
      display: block;
    }
  }

  @media ${device.mobileMLandscape} {
    margin: 0;

    svg {
      width: 66%;
      margin: 0 auto;
      display: block;
    }
  }

  @media ${device.tablet} {
    margin: 15vh 0;
    justify-self: center;
    svg {
      width: 80%;
    }
  }

  @media ${device.tabletland} {
    margin: 10vh 0;
  }
  @media ${device.ipadProPortrait} {
    justify-self: initial;
    grid-column: 2 / span 3;
    margin: 20vh 0;
  }

  @media ${device.laptop} {
    margin: 15vh 0;
    justify-self: initial;
    grid-column: 6 / span 6;
  }
`

const TwallieDescription = styled.p`
  font-family: 'Cardo', serif;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  margin: 40px;

  @media (min-width: 370px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 30px;
    text-align: left;
  }
`
const Background = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

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
      rgba(22, 25, 25, 0.25) 0%,
      rgba(22, 25, 25, 1) 95%,
      rgba(22, 25, 25, 1) 100%
    );
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  > * {
    margin-bottom: 15px;
  }

  @media ${device.mobileSLandscape} {
    flex-direction: row;
  }

  @media ${device.mobileMLandscape} {
    flex-direction: row;
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 40px;

    > * {
      margin-bottom: 0;
      margin-right: 1.5em;
    }
  }
`

const IndexPage = props => {
  const data = props.data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <>
      <div className="blurwrapper">
        <SEO title="Home" description="Officiële website van Twallie. Contacteer of boek hem, kom meer over hem te weten, en krijg toegang tot zijn press-pics & logo's." lang="nl" />
        <Background>
          <Img
            objectFit="cover"
            objectPosition="50% 50%"
            fluid={data.landingImage.childImageSharp.fluid}
          />
        </Background>
        <Layout>
          <LandingContainer>
            <Icon />
            <TwallieDescription>{data.twallieDescription}</TwallieDescription>
            <Flex>
              <TwallieModal buttonText="Boek mij" content={<ContactMe />} />
              <Button
                text="Press-kit"
                linkTo="https://www.dropbox.com/sh/7apd9bfn32mgki7/AAD5K8s4N9AhE7ncc4xJ6eIea?dl=0"
                external
              />
              <Button text="Wie ben ik?" linkTo="/aboutme" />
            </Flex>
          </LandingContainer>
        </Layout>

        {/* <!-- A little help for the Netlify post-processing bots --> */}
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          hidden
          action="/thanks"
        >
          <input type="text" name="fullName" />
          <input type="email" name="email" />
          <input type="text" name="dateTime" />
          <input name="eventAndLocation" type="text" />
          <textarea name="message"></textarea>
        </form>
      </div>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(index)\\\\.+/" } }
    ) {
      edges {
        node {
          frontmatter {
            landingImage {
              childImageSharp {
                fluid(quality: 77, maxWidth: 2048) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            twallieDescription
          }
        }
      }
    }
  }
`
