import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Container, Row } from "reactstrap"

import Fade from "react-reveal/Fade"

import Articles from "../components/ArticlesData"

const ArticlesPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <Fade left>
        <h1 className="display-4 font-weight-bold text-center">Articles</h1>
        <Container>
          <Row>
            <Articles />
          </Row>
        </Container>
      </Fade>
    </Layout>
  )
}

export default ArticlesPage
