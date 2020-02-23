import React from "react"
import { ThemeProvider } from "emotion-theming"
import { theme } from "./src/theme/theme"
import GlobalStateProvider from "./src/store/GlobalState"

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </GlobalStateProvider>
)
