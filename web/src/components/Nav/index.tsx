import React from 'react'
import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core'

const Nav: React.FC = () => {
  return (
    <>
    <CssBaseline />
    <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Project X
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Nav
