import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

const Fab: React.FC = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => navigation.navigate('Add')}
    >
      <Icon name="plus" size={30} style={styles.icon} />
    </TouchableOpacity>
  )
}

export default Fab
