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
import { IUser } from '../../lib/interfaces'
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

const initUser = { name: '', email: '', password: '' }

const AddUser: React.FC = () => {
  const classes = useStyles()

  const [formData, setFormData] = useState<IUser>(initUser)
  const [validEmail, setValidEmail] = useState<Boolean>(false)

  const handleSubmit = async () => {
    try {
      await axios.post(api.users, { ...formData })
      setFormData(initUser)
      Notiflix.Notify.Success('Cadastrado com Sucesso!')
    } catch (error) {
      Notiflix.Notify.Failure('Erro, tente novamente!')
    }
  }

  const handleChange = event => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(String(formData.email).toLowerCase())) {
      setValidEmail(true)
      Notiflix.Notify.Success('E-mail válido')
    } else {
      setValidEmail(false)
      Notiflix.Notify.Failure('E-mail Inválido')
    }
  }

  return (
    <>
      <Typography component="h1" variant="h6">
        Adicionar Usuários
      </Typography>

      <Link href="/users">
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
              value={formData.name}
              fullWidth
              margin="normal"
              onChange={event => handleChange(event)}
            />
            <TextField
              id="email"
              label="E-mail"
              type="email"
              variant="outlined"
              value={formData.email}
              fullWidth
              margin="normal"
              onChange={event => handleChange(event)}
              onBlur={() => validateEmail()}
            />
            <TextField
              id="password"
              label="Senha"
              type="password"
              variant="outlined"
              value={formData.password}
              fullWidth
              margin="normal"
              onChange={event => handleChange(event)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleSubmit()}
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.password ||
                !validEmail
              }
            >
              Salvar
            </Button>
          </div>
        </form>
      </Paper>
    </>
  )
}

export default AddUser
