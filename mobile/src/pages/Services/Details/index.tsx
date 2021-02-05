import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { IServiceOrder } from '../../../lib/interfaces'

const DetailsService: React.FC<IServiceOrder> = (props: IServiceOrder) => {
  return (
    <>
      <View style={styles.container}>
        <Text>{props.problem}</Text>
      </View>
    </>
  )
}

export default DetailsService
