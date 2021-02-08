import Router from 'next/router'
import cookie from 'js-cookie'

export const login = (token: string): void => {
  cookie.set('token', token, { expires: 1 })
  Router.push('/')
}

export const logout = (): void => {
  cookie.remove('token')
  Router.push('/login')
}
