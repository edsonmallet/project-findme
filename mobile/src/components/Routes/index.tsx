import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddService from '../../pages/Services/Add'
import ListService from '../../pages/Services/List'
import DetailsService from '../../pages/Services/Details'
import colors from '../../styles/colors'

const Stack = createStackNavigator()

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
  headerBackTitleVisible: false
}

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={ListService}
        options={{ headerTitle: 'Listagem', ...optionsHeader }}
      />
      <Stack.Screen
        name="Add"
        component={AddService}
        options={{ headerTitle: 'Adicionar', ...optionsHeader }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsService}
        options={{ headerTitle: 'Detalhes', ...optionsHeader }}
      />
    </Stack.Navigator>
  )
}

export default Routes
