import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import AddService from './src/pages/add'
import ListService from './src/pages/list'
import Header from './src/components/Header'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3f51b5',
    accent: '#f50057'
  }
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen
            name="Add"
            component={AddService}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="List"
            component={ListService}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
