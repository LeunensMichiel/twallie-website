import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { device } from '../components/device'

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2em;
  margin-top: 10%;
  text-align: center;

  h1 {
    font-size: 3rem;
  }

  @media ${device.tablet} {
    margin-top: 40px;
    h1 {
      font-size: 72px;
    }
    p {
      font-size: 18px;
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>404 // NOT FOUND</h1>
      <p>Oei? Precies een fout nummer aangevraagd...</p>
    </Container>
  </Layout>
)

export default NotFoundPage
