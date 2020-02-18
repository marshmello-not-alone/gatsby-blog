import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

//styled components
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomePageContainer>
        <h1>Hey Hey Hey</h1>
        <span>Welcome to my website!</span>
      </HomePageContainer>
    </Layout>
  )
}
