import React from 'react'

import {
  Typography,
  Fab,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core'

import { IClient } from '../../lib/interfaces'

import AddIcon from '@material-ui/icons/Add'
import TableListClient from '../../components/TableListClient'
import { api, fetcher } from '../../lib/api'

import useSwr from 'swr'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'

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

const Client: React.FC = ({
  clients
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const classes = useStyles()

  const { data, error } = useSwr<Array<IClient>>(api.clients, fetcher, {
    initialData: clients
  })

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Carregando...</div>

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

      {data.length === 0 && <Typography>Nenhum cliente cadastrado</Typography>}
      {data.length > 0 && (
        <div className={classes.table}>
          <TableListClient rows={data} />
        </div>
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const clients = await fetcher(api.clients)
  return { props: { clients } }
}

export default Client
