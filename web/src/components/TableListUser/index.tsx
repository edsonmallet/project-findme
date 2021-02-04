import React from 'react'

import { IUser } from '../../lib/interfaces'

import { DataGrid, ColDef } from '@material-ui/data-grid'
import { Paper } from '@material-ui/core'

const columns: ColDef[] = [
  { field: 'id', headerName: '#ID', flex: 2 },
  { field: 'name', headerName: 'Nome', flex: 2 },
  { field: 'email', headerName: 'Email', flex: 2 },
  { field: 'created_at', headerName: 'Criado em', flex: 1 },
  { field: 'updated_at', headerName: 'Ultimo Update', flex: 1 }
]

interface TableListUserProps {
  rows: Array<IUser>
}

const TableListUser: React.FC<TableListUserProps> = (
  props: TableListUserProps
) => {
  const rows = props.rows.map(item => ({
    id: item.id,
    name: item.name,
    email: item.email,
    created_at: item.created_at,
    updated_at: item.update_at
  }))

  return (
    <Paper style={{ minHeight: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} showToolbar />
    </Paper>
  )
}

export default TableListUser
