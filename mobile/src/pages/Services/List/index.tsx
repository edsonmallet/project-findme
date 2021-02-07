import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import ListServiceItems from '../../../components/ListServiceItems'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fab from '../../../components/Fab'
import { IServiceOrder } from '../../../lib/interfaces'
import Toast from 'react-native-toast-message'
import Spinner from 'react-native-loading-spinner-overlay'
import styles from './styles'
import api, { endpoints } from '../../../lib/api'
import { useNavigation } from '@react-navigation/native'

const ListService: React.FC = () => {
  const navigation = useNavigation()
  const [spinner, setSpinner] = useState<boolean>(false)

  const [servicesOrders, setServicesOrders] = useState<Array<IServiceOrder>>([])

  const getAllSo = async (): Promise<void> => {
    setSpinner(true)
    try {
      const so = await api.get(endpoints.so)
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
    const unsubscribe = navigation.addListener('focus', () => {
      getAllSo()
    })
    return unsubscribe
  }, [navigation])

  return (
    <>
      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={{ color: '#fff' }}
      />
      <SafeAreaView style={styles.safeAreaView}>
        <FlatList
          style={styles.list}
          data={servicesOrders}
          renderItem={({ item }) => (
            <ListServiceItems item={item} key={item.id} />
          )}
        />
      </SafeAreaView>
      <Fab />
    </>
  )
}

export default ListService
