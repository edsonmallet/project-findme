import React, { useEffect } from 'react'
import { AppProps } from 'next/app'

import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

import Nav from '../components/Nav'
import { createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    grid: {
      padding: theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary
    }
  })
)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const classes = useStyles()

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  })
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Nav />
        <Grid item xs={12} className={classes.grid}>
          <Paper className={classes.paper}>
            <Component {...pageProps} />
          </Paper>
        </Grid>
        <GlobalStyles />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
