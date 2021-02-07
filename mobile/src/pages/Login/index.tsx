import React, { useContext, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { useAuth } from '../../context/auth'
import Toast from 'react-native-toast-message'

const Login: React.FC = () => {
  const { signed, signIn } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSignIn = () => {
    try {
      signIn({ email, password })
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Predial X</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonFloatBottom}
        onPress={() => handleSignIn()}
      >
        <Text style={styles.buttonFloatText}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
