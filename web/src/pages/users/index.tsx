import React from 'react'

import {
  Typography,
  Fab,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'

import { IUser } from '../../lib/interfaces'

import useSwr from 'swr'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { api, fetcher } from '../../lib/api'
import TableListUser from '../../components/TableListUser'
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

const Users: React.FC = ({
  users
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const classes = useStyles()

  const { data, error } = useSwr<Array<IUser>>(api.users, fetcher, {
    initialData: users
  })

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Carregando...</div>

  return (
    <>
      <Typography component="h1" variant="h6">
        Usuários
      </Typography>

      <Link href="/users/add">
        <a>
          <Fab className={classes.fab} color="secondary">
            <AddIcon />
          </Fab>
        </a>
      </Link>

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
  const users = await fetcher(api.users)
  return { props: { users } }
}

export default Users
