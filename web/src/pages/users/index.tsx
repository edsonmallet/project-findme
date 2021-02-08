import React, { useEffect, useState } from 'react'

import {
  Typography,
  Fab,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'

import { IUser, PropsAuth } from '../../lib/interfaces'

import { GetServerSideProps } from 'next'
import { api } from '../../lib/api'
import TableListUser from '../../components/TableListUser'
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

const Users: React.FC<PropsAuth> = (props: PropsAuth) => {
  const classes = useStyles()

  const [users, setUsers] = useState<Array<IUser>>([])

  useEffect(() => {
    async function getProps() {
      const users = await axios.get(api.users, {
        headers: { Authorization: `Bearer ${props.token}` }
      })
      setUsers(users.data)
    }
    getProps()
  }, [])
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

      {users.length === 0 && <Typography>Nenhum cliente cadastrado</Typography>}
      {users.length > 0 && (
        <div className={classes.table}>
          <TableListUser rows={users} token={props.token} />
        </div>
      )}
    </>
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

export default Users
