import React from 'react'

import {
  Typography,
  Fab,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'
import TableListClient from '../components/TableListClient'
import { api, fetcher } from '../lib/api'

import useSwr from 'swr'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

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
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  const { data, error } = useSwr(`${api.BASE_URL}/clients`, fetcher, {
    initialData: clients
  })

  if (error) return <div>Failed to load users</div>
  if (!data) return handleToggle()

  console.log(data)

  return (
    <>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Typography component="h1" variant="h6">
        Clientes
        <Fab className={classes.fab} color="secondary">
          <AddIcon />
        </Fab>
      </Typography>
      {data.length === 0 && <Typography>Nenhum cliente cadastrado</Typography>}
      {data.length > 0 && (
        <div className={classes.table}>
          <TableListClient rows={data} />
        </div>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const clients = await fetcher(`${api.BASE_URL}/clients`)
  return { props: { clients } }
}

export default Client
