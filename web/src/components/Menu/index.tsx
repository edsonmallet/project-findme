import React from 'react'
import Link from 'next/link'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: '#fff',
      textDecoration: 'none',
      paddingLeft: 10,
      paddingRight: 10,
      transition: 'all 0.5s',
      '&:hover': {
        color: 'red'
      }
    }
  })
)

const Menu: React.FC = () => {
  const classes = useStyles()

  return (
    <div style={{ marginLeft: 20 }}>
      <Link href="/users">
        <a className={classes.link}>Usuários</a>
      </Link>
      <Link href="/clients">
        <a className={classes.link}>Clientes</a>
      </Link>
      <Link href="/services">
        <a className={classes.link}>OS`s</a>
      </Link>
    </div>
  )
}

export default Menu
