import React from 'react'
import useGlobalState from './useGlobalState'
import Context from './context'

// What ever is wrapped in children will render
const GlobalStateProvider = ({children}) => {
  return (
    <Context.Provider value = {useGlobalState()}>{children}</Context.Provider>
  )
}

export default GlobalStateProvider