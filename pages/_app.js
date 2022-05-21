import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styled from "styled-components"
import { supabase } from '../lib/supabase'
import { Auth } from '@supabase/ui'

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
    font-family: Arial;
  }
  body {
    margin: 0;
    padding: 0;
    position: relative;
  }
  h1 {
    font-family: Arial;
    font-size: 23px;
    font-style: normal;
    font-variant: normal;
    font-weight: 700;
    line-height: 23px;
  }
  h3
  {
    font-family: Arial;
    font-size: 17px;
    font-style: normal;
    font-variant: normal;
    font-weight: 700;
    line-height: 23px; }
  p
  {
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 23px;
  }
  blockquote
  {
    font-family: Arial;
    font-size: 17px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 23px;
  }
  pre {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 11px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 23px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#ffffff',
  },
}

const Overlay = styled.div``

export default function App({ Component, pageProps }) {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <GlobalStyle />
        <Component {...pageProps} />
    </Auth.UserContextProvider>
  )
}
