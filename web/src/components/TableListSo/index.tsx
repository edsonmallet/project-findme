import React from 'react'

import { IServiceOrder } from '../../lib/interfaces'

import { DataGrid, ColDef } from '@material-ui/data-grid'
import { Paper } from '@material-ui/core'

const columns: ColDef[] = [
  { field: 'id', headerName: '#ID', flex: 2 },
  { field: 'client', headerName: 'Cliente', flex: 1 },
  { field: 'user', headerName: 'Usuário', flex: 1 },
  { field: 'problem', headerName: 'Problema', flex: 4 },
  { field: 'created_at', headerName: 'Criado em', flex: 1 },
  { field: 'updated_at', headerName: 'Ultimo Update', flex: 1 }
]

interface TableListSoProps {
  rows: Array<IServiceOrder>
}

const TableListSo: React.FC<TableListSoProps> = (props: TableListSoProps) => {
  const rows = props.rows.map(item => ({
    id: item.id,
    client: item.client.name,
    user: item.user.name,
    problem: item.problem,
    created_at: item.created_at,
    updated_at: item.update_at
  }))

  return (
    <Paper style={{ minHeight: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} showToolbar />
    </Paper>
  )
}

export default TableListSo
