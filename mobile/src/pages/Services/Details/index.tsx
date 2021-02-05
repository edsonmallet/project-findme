import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const DetailsService: React.FC = () => {
  const navigation = useNavigation()

  return (
    <>
      <View style={styles.container}>
        <Text>Details</Text>
      </View>
    </>
  )
}

export default DetailsService
