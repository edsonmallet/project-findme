import React from 'react'
import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core'
import Menu from '../Menu'

const Nav: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" noWrap>
            PredialX
          </Typography>
          <Menu />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Nav
