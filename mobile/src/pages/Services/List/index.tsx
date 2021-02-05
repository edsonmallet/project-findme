import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { FlatList, View } from 'react-native'
import ListServiceItems from '../../../components/ListServiceItems'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fab from '../../../components/Fab'
import { api } from '../../../lib/api'
import { IServiceOrder } from '../../../lib/interfaces'
import axios from 'axios'
import Toast from 'react-native-toast-message'

const ListService: React.FC = () => {
  const navigation = useNavigation()

  const [servicesOrders, setServicesOrders] = useState<Array<IServiceOrder>>([])

  const getAllClients = async (): Promise<void> => {
    try {
      await fetch(api.so).then(res => setServicesOrders(res.json()))
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: `${error.message}`,
        visibilityTime: 8000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40
      })
    }
  }

  useEffect(() => {
    getAllClients()
  })

  const itemList = (item: IServiceOrder) => <ListServiceItems item={item} />

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <FlatList
            data={servicesOrders}
            renderItem={itemList}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
      <Fab />
    </>
  )
}

export default ListService
