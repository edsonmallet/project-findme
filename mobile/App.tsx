import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/components/Routes'
import Toast from 'react-native-toast-message'

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  )
}
