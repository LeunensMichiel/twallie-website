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
  margin-top: 10%;
  padding: 0 2em;

  @media (min-width: 370px) {
    margin-top: 20%;
  }

  @media ${device.laptop} {
    grid-column: 6 / span 5;
    margin-top: 15%;
    padding: 0;
  }

  @media ${device.desktop} {
    grid-column: 6 / span 4;
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
    margin-bottom: 25px;
  }

  @media ${device.laptop} {
    flex-direction: row;

    > * {
      margin-bottom: 0;
    }
  }
`

const IndexPage = props => {
  const data = props.data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <>
      <div className="blurwrapper">
        <Background>
          <Img
            objectFit="cover"
            objectPosition="50% 50%"
            fluid={data.landingImage.childImageSharp.fluid}
          />
        </Background>
        <Layout>
          <SEO title="Boeking" description="Boek Twallie" lang="nl" />
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
                  presentationWidth
                  presentationHeight
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
