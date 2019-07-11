import React, { PureComponent } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import SEO from '../components/seo'
import colors from '../components/colors'
import Header from '../components/header'
import Footer from '../components/footer'
import { device } from '../components/device'

const BioWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  background: ${colors.foreground};
  color: ${colors.background};

  @media ${device.tablet} {
    margin-top: 40px;
  }
`

const BioContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 834px;
  height: auto;
  padding: 5%;

  @media ${device.laptop} {
    padding: 5% 0;
  }
`

const MarkdownGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-column-gap: 5%;
  grid-auto-flow: dense;

  p {
    font-family: 'Cardo', 'serif';
    font-size: 14px;
    line-height: 22px;
    text-align: justify;
    grid-column: 1 / span 2;

    &:first-of-type::first-letter {
      font-size: 200%;
      color: ${colors.primaryaccent};
    }

    @media ${device.tablet} {
      font-size: 18px;
      line-height: 27px;
    }
  }

  img {
    margin-block-start: 1em;
    margin-block-end: 1em;
    width: 100%;
    grid-column: 1 / span 2;

    @media ${device.tablet} {
      &[alt*='left'] {
        grid-column: 1;

        + p {
          grid-column: 2;
        }
      }

      &[alt*='right'] {
        grid-column: 2;
        + p {
          grid-column: 1;
        }
      }
    }
  }
`

const Title = styled.h1`
  font-size: 52px;
`

const BottomImage = styled.div`
  width: 100%;
  height: 40vh;
  background: ${colors.background} url(${props => props.imgUrl}) no-repeat
    center/cover;
  position: relative;

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

export class aboutme extends PureComponent {
  renderParagraph(props) {
    const { children } = props

    if (
      children &&
      children[0] &&
      children.length === 1 &&
      children[0].props &&
      children[0].props.src
    ) {
      // rendering media without p wrapper

      return children
    }

    return <p>{children}</p>
  }

  render() {
    const { data } = this.props
    return (
      <>
        <SEO
          title="Over mij"
          description="Wie ben ik? // Deejay Twallie"
          lang="nl"
        />
        <Header />
        <BioWrapper>
          <BioContainer>
            <Title>{data.strapiBio.bioTitle}</Title>
            <MarkdownGrid>
              <ReactMarkdown
                source={data.strapiBio.document}
                renderers={{
                  paragraph: this.renderParagraph,
                }}
              />
            </MarkdownGrid>
          </BioContainer>
          <BottomImage
            imgUrl={data.strapiBio.bottomImage.childImageSharp.fluid.src}
          />
        </BioWrapper>
        <Footer />
      </>
    )
  }
}

export default aboutme

export const aboutQuery = graphql`
  query aboutPageQuery {
    strapiBio(strapiId: { eq: 1 }) {
      id
      bioTitle
      bottomImage {
        childImageSharp {
          fluid(quality: 77, maxWidth: 2048) {
            src
          }
        }
      }
      document
    }
  }
`
