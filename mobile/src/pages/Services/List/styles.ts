import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  list:{
    marginBottom: 48
  },
  safeAreaView:{
    height: Dimensions.get('window').height
  }
})

export default styles