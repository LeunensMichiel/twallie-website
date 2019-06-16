import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Background = styled.div`
  background-image: url(${props => (props.imgSrc ? props.imgSrc : '')});
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
const SocialsPage = () => (
  <Background>
    <Layout>
      <SEO
        title="Socials"
        description="Socials van Deejay Twallie // Socials Pagina"
        lang="nl"
      />
    </Layout>
  </Background>
)

export default SocialsPage
