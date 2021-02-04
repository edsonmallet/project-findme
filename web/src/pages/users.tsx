import React from 'react'

import {
  Typography,
  Fab,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'
import TableListUser from '../components/TableListUser'
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

const Users: React.FC = ({
  users
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  const { data, error } = useSwr(`${api.BASE_URL}/users`, fetcher, {
    initialData: users
  })

  if (error) return <div>Failed to load users</div>
  if (!data) return handleToggle()

  return (
    <>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Typography component="h1" variant="h6">
        Usuários
        <Fab className={classes.fab} color="secondary">
          <AddIcon />
        </Fab>
      </Typography>
      {data.length === 0 && <Typography>Nenhum cliente cadastrado</Typography>}
      {data.length > 0 && (
        <div className={classes.table}>
          <TableListUser rows={data} />
        </div>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await fetcher(`${api.BASE_URL}/users`)
  return { props: { users } }
}

export default Users
