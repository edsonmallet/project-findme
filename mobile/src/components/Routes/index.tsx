import React, { useContext } from 'react'
import { useAuth } from '../../context/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import Spinner from 'react-native-loading-spinner-overlay'

const Routes: React.FC = () => {
  const { signed, loading } = useAuth()

  if (loading) {
    return (
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{ color: '#fff' }}
      />
    )
  }
  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
