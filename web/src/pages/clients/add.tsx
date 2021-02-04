import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import {
  Button,
  createStyles,
  Fab,
  makeStyles,
  Paper,
  TextField,
  Theme
} from '@material-ui/core'
import axios from 'axios'
import { api } from '../../lib/api'
import Notiflix from 'notiflix'
import Link from 'next/link'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(4)
    }
  })
)

const AddClient: React.FC = () => {
  const classes = useStyles()

  const [name, setName] = useState<string>('')

  const handleSubmit = async () => {
    try {
      await axios.post(api.clients, { name })
      setName('')
      Notiflix.Notify.Success('Cadastrado com Sucesso!')
    } catch (error) {
      Notiflix.Notify.Failure('Erro no envio, tente novamente!')
    }
  }

  return (
    <>
      <Typography component="h1" variant="h6">
        Adicionar Clientes
      </Typography>

      <Link href="/clients">
        <a>
          <Fab className={classes.fab} color="secondary">
            <ArrowBackIcon />
          </Fab>
        </a>
      </Link>

      <Paper className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="name"
              label="Nome"
              variant="outlined"
              value={name}
              fullWidth
              margin="normal"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleSubmit()}
              disabled={name.length < 3}
            >
              Salvar
            </Button>
          </div>
        </form>
      </Paper>
    </>
  )
}

export default AddClient
