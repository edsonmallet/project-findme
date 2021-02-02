import React, { useEffect } from 'react'
import { AppProps } from 'next/app'

import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles/>
      </ThemeProvider>
    </>
  )
}

export default MyApp
