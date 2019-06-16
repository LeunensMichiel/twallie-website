import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

import Icon from '../images/twallie-logo.svg'

const LandingContainer = styled.div`
  margin-top: 100px;
  grid-column: col-start 6 / span 7;
`

const TwallieDescription = styled.p`
  font-family: 'Cardo', serif;
  font-size: 20px;
  line-height: 30px;
`
const Background = styled.div`
  background-image: url(${props => (props.imgSrc ? props.imgSrc : '')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
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
      rgba(22, 25, 25, 0.25) 0%,
      rgba(22, 25, 25, 1) 95%,
      rgba(22, 25, 25, 1) 100%
    );
  }
`
const IndexPage = ({ data }) => (
  <>
    <Background
      imgSrc={data.strapiPage.pageBackground.childImageSharp.fluid.src}
    />
    <Layout>
      <SEO
        title="Boekings"
        description="Boek Deejay Twallie // Home Pagina"
        lang="nl"
      />
      <LandingContainer>
        <Icon />
        <TwallieDescription>
          {data.strapiPage.twallieDescription}
        </TwallieDescription>
      </LandingContainer>
    </Layout>
  </>
)

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    strapiPage(type: { eq: "home" }) {
      id
      type
      twallieDescription
      pageBackground {
        id
        childImageSharp {
          fluid(quality: 70, maxWidth: 2048, fit: COVER) {
            src
          }
        }
      }
    }
  }
`
