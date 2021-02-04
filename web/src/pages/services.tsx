import React from 'react'

import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core'
import TableList from '../components/TableListUser'

const useStyles = makeStyles(
  createStyles({
    table: {
      marginTop: 40
    }
  })
)
const Services: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <Typography component="h1" variant="h6">
        Ordens de Serviços
      </Typography>
      <div className={classes.table}>
        <TableList />
      </div>
    </>
  )
}

export default Services
