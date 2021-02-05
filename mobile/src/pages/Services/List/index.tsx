import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import ListServiceItems from '../../../components/ListServiceItems'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fab from '../../../components/Fab'
import { api } from '../../../lib/api'
import { IServiceOrder } from '../../../lib/interfaces'
import axios from 'axios'
import Toast from 'react-native-toast-message'
import Spinner from 'react-native-loading-spinner-overlay'
import styles from './styles'

const ListService: React.FC = () => {
  const [spinner, setSpinner] = useState<boolean>(false)

  const [servicesOrders, setServicesOrders] = useState<Array<IServiceOrder>>([])

  const getAllSo = async (): Promise<void> => {
    setSpinner(true)
    try {
      const so = await axios.get(api.so)
      setServicesOrders(so.data)
      setSpinner(false)
    } catch (error) {
      setSpinner(false)
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
    getAllSo()
  }, [])

  return (
    <View>
      <SafeAreaView>
        <Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={{ color: '#fff' }}
        />
        <FlatList
          style={styles.list}
          data={servicesOrders}
          renderItem={({ item }) => (
            <ListServiceItems item={item} key={item.id} />
          )}
        />
      </SafeAreaView>
      <Fab />
    </View>
  )
}

export default ListService
