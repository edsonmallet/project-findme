import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useAuth } from '../../context/auth'
import styles from './styles'

const LogoutButton: React.FC = () => {
  const { signOut } = useAuth()
  return (
    <>
      <TouchableOpacity style={styles.icon} onPress={() => signOut()}>
        <Icon name="logout" color="#fff" size={24} />
      </TouchableOpacity>
    </>
  )
}

export default LogoutButton
