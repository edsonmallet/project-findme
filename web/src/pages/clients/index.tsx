import React, { useEffect, useState } from 'react'

import {
  Typography,
  Fab,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core'

import { IClient, PropsAuth } from '../../lib/interfaces'

import AddIcon from '@material-ui/icons/Add'
import TableListClient from '../../components/TableListClient'
import { api } from '../../lib/api'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import axios from 'axios'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    table: {
      marginTop: 40
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    }
  })
)

const Client: React.FC<PropsAuth> = (props: PropsAuth) => {
  const classes = useStyles()

  const [clients, setClients] = useState<Array<IClient>>([])

  useEffect(() => {
    async function getProps() {
      const clients = await axios.get(api.clients, {
        headers: { Authorization: `Bearer ${props.token}` }
      })
      setClients(clients.data)
    }
    getProps()
  }, [])

  return (
    <div>
      <Typography component="h1" variant="h6">
        Clientes
      </Typography>

      <Link href="/clients/add">
        <a>
          <Fab className={classes.fab} color="secondary">
            <AddIcon />
          </Fab>
        </a>
      </Link>

      {clients.length === 0 && (
        <Typography>Nenhum cliente cadastrado</Typography>
      )}
      {clients.length > 0 && (
        <div className={classes.table}>
          <TableListClient rows={clients} token={props.token} />
        </div>
      )}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PropsAuth> = async ({
  req
}) => {
  const token = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith('token='))
    .replace('token=', '')
  return { props: { token } }
}
export default Client
