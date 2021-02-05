import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import { IServiceOrder } from '../../lib/interfaces'
import styles from './styles'
import { convertDate } from '../../lib/functions'

interface ListServiceItemProps {
  item: IServiceOrder
}

const ListServiceItems: React.FC<ListServiceItemProps> = (
  props: ListServiceItemProps
) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.leftCard}>
        <Text>{props.item.client}</Text>
      </View>
      <View style={styles.rightCard}>
        <Text>{convertDate(props.item.created_at)}</Text>
      </View>
    </View>
  )
}

export default ListServiceItems
