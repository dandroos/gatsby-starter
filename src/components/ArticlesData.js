import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import AniLink from "gatsby-plugin-transition-link"

import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap"


export default props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              author
              date(formatString: "dddd DD MMMM YYYY", locale: "en")
              path
              cover_image {
                publicURL
                childImageSharp {
                  fluid(
                    maxWidth: 550
                    maxHeight: 350
                    fit: COVER
                    cropFocus: CENTER
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges.map(post => (
    <Col md={12} lg={6} key={post.node.id}>
      <Card className="text-dark mb-3">
        <AniLink fade="true" to={post.node.frontmatter.path}>
          <Img
            fluid={post.node.frontmatter.cover_image.childImageSharp.fluid}
          ></Img>
        </AniLink>
        <CardBody>
          <CardTitle className="display-4">
            {post.node.frontmatter.title}
          </CardTitle>
          <CardSubtitle>{post.node.frontmatter.date}</CardSubtitle>
          <hr />
          <CardText className="text-justify">{post.node.excerpt}</CardText>
          <AniLink
            fade="true"
            to={post.node.frontmatter.path}
            className="btn btn-primary text-right"
          >
            Read more
          </AniLink>
        </CardBody>
      </Card>
    </Col>
  ))
}
