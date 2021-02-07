import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddService from '../../pages/Services/Add'
import ListService from '../../pages/Services/List'
import DetailsService from '../../pages/Services/Details'
import colors from '../../styles/colors'
import LogoutButton from '../LogoutButton'

const AppStack = createStackNavigator()

const optionsHeader = {
  headerStyle: {
    backgroundColor: colors.primary,
    borderWidth: 0
  },
  headerTitleStyle: {
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal'
  },
  headerTintColor: colors.white,
  headerBackTitleVisible: false,
  headerRight: () => <LogoutButton />
}

const Routes: React.FC = () => {
  return (
    <AppStack.Navigator initialRouteName="Login">
      <AppStack.Screen
        name="List"
        component={ListService}
        options={{ headerTitle: 'Listagem', ...optionsHeader }}
      />
      <AppStack.Screen
        name="Add"
        component={AddService}
        options={{ headerTitle: 'Adicionar', ...optionsHeader }}
      />
      <AppStack.Screen
        name="Details"
        component={DetailsService}
        options={{ headerTitle: 'Detalhes', ...optionsHeader }}
      />
    </AppStack.Navigator>
  )
}

export default Routes
