import React, { createContext, useContext, useEffect, useState } from 'react'
import * as auth from '../lib/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../lib/api'

interface IUser {
  id: string
  name: string
  email: string
  created_at: string
  updated_at: string
}

interface AuthContextData {
  signed: boolean
  user: IUser | null
  loading: boolean
  signIn(data: Request): Promise<void>
  signOut(): void
}

interface Request {
  email: string
  password: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState(false)

  const loadStorageData = async () => {
    const storageUser = await AsyncStorage.getItem('@RNAuth:user')
    const storageToken = await AsyncStorage.getItem('@RNAuth:token')

    if (storageUser && storageToken) {
      api.defaults.headers['Authorization'] = `Bearer ${storageToken}`
      setUser(JSON.parse(storageUser))
    }
  }

  const signIn = async ({ email, password }: Request) => {
    const res = await auth.signIn({ email, password })
    setUser(res.user)

    api.defaults.headers['Authorization'] = `Bearer ${res.token}`

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(res.user))
    await AsyncStorage.setItem('@RNAuth:token', res.token)
  }

  const signOut = () => {
    AsyncStorage.clear().then(() => setUser(null))
  }

  useEffect(() => {
    loadStorageData()
  }, [])

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
