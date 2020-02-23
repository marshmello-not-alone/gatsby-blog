import React, {useContext} from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Context from "../store/context"
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
  const { state, dispatch } = useContext(Context)
  const theme = useTheme()
  return (
    <Layout>
      <SEO title="Home" />
      <div
        css={css`
          h1,
          h2 {
            color: ${state.isDark ? theme.dark.font : theme.light.font};
          }
        `}
      >
        <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>
          Toggle Dark Mode
        </button>
        <h2>Dark Mode: {state.isDark ? "on" : "off"}</h2>
      </div>
      <HomePageContainer>
        <h1>Hey Hey Hey</h1>
        <span>Welcome to my website!</span>
      </HomePageContainer>
    </Layout>
  )
}
