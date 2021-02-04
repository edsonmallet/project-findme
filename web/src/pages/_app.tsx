import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'

import Nav from '../components/Nav'
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import theme from '../styles/theme'
import Notiflix from 'notiflix'

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

    Notiflix.Notify.Init({
      position: 'center-bottom',
      distance: '20px',
      useGoogleFont: true,
      fontFamily: 'Roboto'
    })
  }, [])
  return (
    <>
      <Head>
        <title>PredialX</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav />
        <Grid item xs={12} className={classes.grid}>
          <Component {...pageProps} />
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default MyApp
