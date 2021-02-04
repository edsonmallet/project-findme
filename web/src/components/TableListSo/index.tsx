import React from 'react'

import { IServiceOrder } from '../../lib/interfaces'

import { DataGrid, ColDef, CellParams } from '@material-ui/data-grid'
import {
  Button,
  createStyles,
  makeStyles,
  Paper,
  Theme
} from '@material-ui/core'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import axios from 'axios'
import { api } from '../../lib/api'

import Notiflix from 'notiflix'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: theme.spacing(0),
      margin: theme.spacing(0)
    }
  })
)

interface TableListSoProps {
  rows: Array<IServiceOrder>
}

const TableListSo: React.FC<TableListSoProps> = (props: TableListSoProps) => {
  const classes = useStyles()

  const columns: ColDef[] = [
    { field: 'id', headerName: '#ID', flex: 2 },
    { field: 'client', headerName: 'Cliente', flex: 1 },
    { field: 'user', headerName: 'Usuário', flex: 1 },
    { field: 'problem', headerName: 'Problema', flex: 4 },
    { field: 'created_at', headerName: 'Criado em', flex: 2 },
    { field: 'updated_at', headerName: 'Ultimo Update', flex: 2 },
    {
      field: 'actions',
      headerName: 'Ações',
      flex: 2,
      disableColumnMenu: true,
      disableClickEventBubbling: true,

      // eslint-disable-next-line react/display-name
      renderCell: (params: CellParams) => {
        const deleteServiceOrder = async () => {
          Notiflix.Confirm.Show(
            'Deletar Ordem de serviço',
            'Essa ação não tem volta!',
            'Sim',
            'Não',
            async function () {
              try {
                await axios.delete(`${api.so}/${params.row.id}`)
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
              onClick={deleteServiceOrder}
              color="secondary"
              variant="text"
              size="small"
              className={classes.button}
            >
              <DeleteForeverIcon />
            </Button>
            <Button
              color="primary"
              variant="text"
              size="small"
              className={classes.button}
            >
              <GpsFixedIcon />
            </Button>
          </>
        )
      }
    }
  ]

  const rows = props.rows.map(item => ({
    id: item.id,
    client: item.client.name,
    user: item.user.name,
    problem: item.problem,
    created_at: item.created_at,
    updated_at: item.update_at
  }))

  return (
    <Paper style={{ minHeight: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        showToolbar
        autoPageSize={true}
      />
    </Paper>
  )
}

export default TableListSo
