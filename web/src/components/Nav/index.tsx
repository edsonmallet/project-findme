import React from 'react'
import {
  AppBar,
  CssBaseline,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core'
import Menu from '../Menu'
import Link from 'next/link'

const useStyles = makeStyles({
  title: {
    color: '#fff',
    textDecoration: 'none'
  }
})

const Nav: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <a>
              <Typography variant="h6" noWrap className={classes.title}>
                PredialX
              </Typography>
            </a>
          </Link>
          <Menu />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Nav
