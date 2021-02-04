import React from 'react'

import { IUser } from '../../lib/interfaces'

import { DataGrid, ColDef, CellParams } from '@material-ui/data-grid'
import { Button, Paper } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import axios from 'axios'
import { api } from '../../lib/api'

import Notiflix from 'notiflix'
import { convertDate } from '../../lib/functions'

const columns: ColDef[] = [
  { field: 'id', headerName: '#ID', flex: 2 },
  { field: 'name', headerName: 'Nome', flex: 2 },
  { field: 'email', headerName: 'Email', flex: 2 },
  { field: 'created_at', headerName: 'Criado em', flex: 1 },
  { field: 'updated_at', headerName: 'Ultimo Update', flex: 1 },
  {
    field: 'actions',
    headerName: 'Ações',
    flex: 1,
    disableColumnMenu: true,
    disableClickEventBubbling: true,
    // eslint-disable-next-line react/display-name
    renderCell: (params: CellParams) => {
      const deleteUser = async () => {
        Notiflix.Confirm.Show(
          'Deletar Usuário?',
          'Essa ação não tem volta!',
          'Sim',
          'Não',
          async function () {
            try {
              await axios.delete(`${api.users}/${params.row.id}`)
              Notiflix.Notify.Success('Deletado com Sucesso!')
            } catch (error) {
              Notiflix.Notify.Failure('Erro, tente novamente!')
            }
          }
        )
      }
      return (
        <>
          <Button
            onClick={deleteUser}
            color="secondary"
            variant="text"
            size="small"
          >
            <DeleteForeverIcon />
          </Button>
        </>
      )
    }
  }
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
    created_at: convertDate(item.created_at),
    updated_at: convertDate(item.update_at)
  }))

  return (
    <Paper style={{ minHeight: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} showToolbar />
    </Paper>
  )
}

export default TableListUser
