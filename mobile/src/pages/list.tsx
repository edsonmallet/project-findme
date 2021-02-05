import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
})

const ListService: React.FC = () => {
  const navigation = useNavigation()
  return (
    <>
      <Header subtitle="Listagem de O.S's" />
      <View>
        <Text>LIST</Text>
      </View>
    </>
  )
}

export default ListService
