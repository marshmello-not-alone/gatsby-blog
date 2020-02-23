/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import { Global, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import Context from "../store/context"

import Header from "./header"
import "./layout.css"
import { theme } from "../theme/theme"

// GraphQL
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

  const { state } = useContext(Context)

  const theme = useTheme()

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Global
        styles={css`
          body {
            background-color: ${state.isDark
              ? theme.dark.background
              : theme.light.background};
          }
        `}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </Global>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
