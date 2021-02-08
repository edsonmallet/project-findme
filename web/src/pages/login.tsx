import React, { useState } from 'react'
import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import { api } from '../lib/api'
import axios from 'axios'
import { login } from '../utils/auth'
import { useCookies } from 'react-cookie'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Login: React.FC = () => {
  const classes = useStyles()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [cookie, setCookie] = useCookies(['token'])

  const handleSubmit = async () => {
    const res = await axios.post(api.auth, { email, password })
    setCookie('token', JSON.stringify(res.data.token), {
      path: '/',
      maxAge: 3600,
      sameSite: true
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoFocus
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            required
            margin="normal"
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            onChange={event => setPassword(event.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!email && email.length < 3 && !password}
            onClick={() => handleSubmit()}
          >
            ENTRAR
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Login
