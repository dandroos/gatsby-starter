/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Fade from "react-reveal/Fade"

import { Container } from "reactstrap"

import SiteNav from "./SiteNav"
import "./styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SiteNav siteTitle={data.site.siteMetadata.title} />
      <main style={{ paddingTop: "6rem" }}>{children}</main>
      <Container>
        <div style={{ overflow: "hidden" }}>
          <Fade up>
            <footer className="text-center pb-3">
              <small>© {new Date().getFullYear()} David Andrews</small>
            </footer>
          </Fade>
        </div>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
