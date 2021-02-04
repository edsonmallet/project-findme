import React from 'react'

import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core'
import TableListSo from '../components/TableListSo'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { api, fetcher } from '../lib/api'
import useSWR from 'swr'
import { IServiceOrder } from '../lib/interfaces'

const useStyles = makeStyles(
  createStyles({
    table: {
      marginTop: 40
    }
  })
)

const ServicesOrders: React.FC = ({
  servicesOrders
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const classes = useStyles()

  const { data, error } = useSWR<Array<IServiceOrder>>(api.so, fetcher, {
    initialData: servicesOrders
  })

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Carregando...</div>

  return (
    <div>
      <Typography component="h1" variant="h6">
        Ordens de Serviço
      </Typography>
      {data.length === 0 && <Typography>Nenhum cliente cadastrado</Typography>}
      {data.length > 0 && (
        <div className={classes.table}>
          <TableListSo rows={data} />
        </div>
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const servicesOrders = await fetcher(api.so)
  return { props: { servicesOrders } }
}

export default ServicesOrders
