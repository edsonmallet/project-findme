import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import { IServiceOrder } from '../../lib/interfaces'
import styles from './styles'
import { convertDate } from '../../lib/functions'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface ListServiceItemProps {
  item: IServiceOrder
}

const ListServiceItems: React.FC<ListServiceItemProps> = (
  props: ListServiceItemProps
) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { ...props.item })}
    >
      <View style={styles.container}>
        <View style={styles.leftCard}>
          <Text style={styles.nameServiceOrder}>{props.item.client.name}</Text>
          <Text style={styles.timeServiceOrder}>
            {props.item.created_at && convertDate(props.item.created_at)}
          </Text>
        </View>
        <View style={styles.rightCard}>
          <Icon name="arrow-right" style={styles.arrowDetails} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ListServiceItems
