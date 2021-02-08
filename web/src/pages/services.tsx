import React, { useEffect, useState } from 'react'

import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core'
import TableListSo from '../components/TableListSo'
import { api } from '../lib/api'
import { IServiceOrder, PropsAuth } from '../lib/interfaces'
import axios from 'axios'
import { GetServerSideProps } from 'next'

const useStyles = makeStyles(
  createStyles({
    table: {
      marginTop: 40
    }
  })
)

const ServicesOrders: React.FC<PropsAuth> = (props: PropsAuth) => {
  const classes = useStyles()
  const [so, setSo] = useState<Array<IServiceOrder>>([])

  useEffect(() => {
    async function getProps() {
      const servicesOrders = await axios.get(api.so, {
        headers: { Authorization: `Bearer ${props.token}` }
      })
      setSo(servicesOrders.data)
    }
    getProps()
  }, [])

  return (
    <div>
      <Typography component="h1" variant="h6">
        Ordens de Serviço
      </Typography>
      {so.length === 0 && <Typography>Nenhum cliente cadastrado</Typography>}
      {so.length > 0 && (
        <div className={classes.table}>
          <TableListSo rows={so} token={props.token} />
        </div>
      )}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req
}) => {
  const token = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith('token='))
    .replace('token=', '')
  return { props: { token } }
}

export default ServicesOrders
