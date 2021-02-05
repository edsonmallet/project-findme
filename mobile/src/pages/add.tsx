import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
})

const AddService: React.FC = () => {
  return (
    <>
      <Header subtitle="Adicionar O.S" />
      <View>
        <Text>Add</Text>
      </View>
    </>
  )
}

export default AddService
