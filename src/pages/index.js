import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Jumbotron, Button, Container, Col, Row } from "reactstrap"
import { GatsbyLogoImage } from "../components/Images"

import Fade from "react-reveal/Fade"

import { useTransition, animated } from "react-spring"

const IndexPage = props => {
  const [message, setMessage] = useState("Ready?")

  const transitions = useTransition(message, null, {
    from: { position: "absolute", opacity: 0, transform: "translateX(-50px)" },
    enter: { position: "relative", opacity: 1, transform: "translateX(0px)" },
    leave: { display: "none" },
  })

  const handleClick = e => {
    e.preventDefault()
    if (message === "Ready?" || message === "Vamos!") {
      setMessage("Let's go!")
    } else {
      setMessage("Vamos!")
    }
  }

  return (
    <Layout>
      <Jumbotron className="text-center text-white bg-primary d-flex justify-content-center align-items-center" style={{ marginTop: "-6rem" }}>
      <SEO title="Home" />
        <Fade left>
          <Container>
            <Row style={{ alignItems: "center" }}>
              <Col sm={12} md={4}>
                <GatsbyLogoImage />
              </Col>
              <Col sm={12} md={8}>
                {transitions.map(({ item, props, key }) => (
                  <animated.div style={props} key={key}>
                    <h1 className="display-4 font-weight-bold">{item}</h1>
                  </animated.div>
                ))}
                <p>
                  This <span className="font-weight-bold">Gatsby</span> starter
                  is all set up and configured with everything you need for CSS,
                  animations, smart image processing and basic Markdown blog/news functionality.
                </p>
                <Button color="secondary" size="lg" onClick={handleClick}>
                  Certainly!
                </Button>
              </Col>
            </Row>
          </Container>
        </Fade>
      </Jumbotron>
    </Layout>
  )
}

export default IndexPage
