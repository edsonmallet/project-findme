import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

import Nav from '../components/Nav'
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    grid: {
      padding: theme.spacing(2)
    }
  })
)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const classes = useStyles()

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  })
  return (
    <React.Fragment>
      <Head>
        <title>PredialX</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Nav />
        <Grid item xs={12} className={classes.grid}>
          <Component {...pageProps} />
        </Grid>
        <GlobalStyles />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
