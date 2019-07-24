import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/button'
import TwallieModal from '../components/home/twalliemodal'
import ContactMe from '../components/home/contact'

import Icon from '../images/twallie-logo.svg'
import { device } from '../components/device'

const LandingContainer = styled.div`
  margin-top: 10%;
  padding: 0 2em;

  @media (min-width: 370px) {
    margin-top: 20%;
  }

  @media ${device.laptop} {
    grid-column: col-start 6 / span 5;
    padding: 0;
  }
`

const TwallieDescription = styled.p`
  font-family: 'Cardo', serif;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  margin-bottom: 40px;

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
  background-image: url(${props => (props.imgSrc ? props.imgSrc : '')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
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

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
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

const IndexPage = ({ data }) => (
  <>
    <div className="blurwrapper">
      <Background
      // imgSrc={data.strapiPage.pageBackground.childImageSharp.fluid.src}
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
            Lorem ipsum
            {/* {data.strapiPage.twallieDescription} */}
          </TwallieDescription>
          <Flex>
            <TwallieModal buttonText="Boek mij" content={<ContactMe />} />
            <Button
              text="Press-kit"
              linkTo="https://imgur.com/UJKKXOB"
              external
            />
            <Button text="Wie ben ik?" linkTo="/aboutme" />
          </Flex>
        </LandingContainer>
      </Layout>
    </div>
  </>
)

export default IndexPage

// export const pageQuery = graphql`
//   query indexPageQuery {
//     strapiPage(type: { eq: "home" }) {
//       id
//       type
//       twallieDescription
//       pageBackground {
//         id
//         childImageSharp {
//           fluid(quality: 77, maxWidth: 2048, fit: COVER) {
//             src
//           }
//         }
//       }
//     }
//   }
// `
