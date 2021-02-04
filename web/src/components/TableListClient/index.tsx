import React from 'react'

import { IClient } from '../../lib/interfaces'

import { DataGrid, ColDef, CellParams } from '@material-ui/data-grid'
import { Button, Paper } from '@material-ui/core'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import Notiflix from 'notiflix'
import axios from 'axios'
import { api } from '../../lib/api'
import { convertDate } from '../../lib/functions'

interface TableListClientProps {
  rows: Array<IClient>
}

const TableListClient: React.FC<TableListClientProps> = (
  props: TableListClientProps
) => {
  const columns: ColDef[] = [
    { field: 'id', headerName: '#ID', flex: 2 },
    { field: 'name', headerName: 'Cliente', flex: 3 },
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
        const deleteClient = async () => {
          Notiflix.Confirm.Show(
            'Deletar Cliente?',
            'Essa ação não tem volta!',
            'Sim',
            'Não',
            async function () {
              try {
                await axios.delete(`${api.clients}/${params.row.id}`)
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
              onClick={deleteClient}
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
  const rows = props.rows.map(item => ({
    id: item.id,
    name: item.name,
    created_at: convertDate(item.created_at),
    updated_at: convertDate(item.update_at)
  }))

  return (
    <Paper style={{ minHeight: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} showToolbar />
    </Paper>
  )
}

export default TableListClient
