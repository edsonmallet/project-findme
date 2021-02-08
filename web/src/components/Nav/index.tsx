import React from 'react'
import {
  AppBar,
  CssBaseline,
  makeStyles,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'
import MenuLinks from '../MenuLinks'
import Link from 'next/link'
import { AccountCircle, ExitToApp } from '@material-ui/icons'

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    flexDirection: 'row'
  },
  leftItems: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    textDecoration: 'none'
  },
  btnLogin: {}
})

const Nav: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.leftItems}>
            <Link href="/">
              <a>
                <Typography variant="h6" noWrap className={classes.title}>
                  PredialX
                </Typography>
              </a>
            </Link>
            <MenuLinks />
          </div>
          <div>
            <Button
              color="inherit"
              onClick={() => {}}
              className={classes.btnLogin}
            >
              <AccountCircle />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Nav
