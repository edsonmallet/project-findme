import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddService from '../../pages/Services/Add'
import ListService from '../../pages/Services/List'
import DetailsService from '../../pages/Services/Details'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={ListService}
        options={{ headerTitle: 'Listagem' }}
      />
      <Stack.Screen
        name="Add"
        component={AddService}
        options={{ headerTitle: 'Adicionar' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsService}
        options={{ headerTitle: 'Detalhes' }}
      />
    </Stack.Navigator>
  )
}

export default Routes
