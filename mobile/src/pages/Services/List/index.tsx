import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { FlatList, View } from 'react-native'
import ListServiceItems from '../../../components/ListServiceItems'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fab from '../../../components/Fab'

const items = [
  {
    id: 1,
    name: 'teste 1'
  },
  {
    id: 2,
    name: 'teste 2'
  },
  {
    id: 3,
    name: 'teste 2'
  },
  {
    id: 3,
    name: 'teste 2'
  },
  {
    id: 4,
    name: 'teste 2'
  },
  {
    id: 5,
    name: 'teste 2'
  },
  {
    id: 6,
    name: 'teste 2'
  },
  {
    id: 8,
    name: 'teste 2'
  },
  {
    id: 9,
    name: 'teste 2'
  },
  {
    id: 10,
    name: 'teste 2'
  },
  {
    id: 8,
    name: 'teste 2'
  }
]

const ListService: React.FC = () => {
  const navigation = useNavigation()

  const itemList = ({ item }) => <ListServiceItems />

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <FlatList
            data={items}
            renderItem={itemList}
            keyExtractor={item => item.id}
          />
        </ScrollView>
        <Fab />
      </SafeAreaView>
    </>
  )
}

export default ListService
