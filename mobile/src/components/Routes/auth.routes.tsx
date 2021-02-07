import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../pages/Login'

const AuthStack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  )
}

export default Routes
