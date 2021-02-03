import React from 'react'
import Link from 'next/link'
import { Button } from '@material-ui/core'

const Menu: React.FC = () => {
  return (
    <div style={{ marginLeft: 20 }}>
      <Link href="/users">
        <Button color="secondary" disableElevation>
          Usuários
        </Button>
      </Link>
      <Link href="/clients">
        <Button color="secondary" disableElevation>
          Clientes
        </Button>
      </Link>
      <Link href="/services">
        <Button color="secondary" disableElevation>
          O.S's
        </Button>
      </Link>
    </div>
  )
}

export default Menu
