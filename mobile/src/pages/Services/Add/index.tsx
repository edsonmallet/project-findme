import React, { useEffect, useState } from 'react'
import { Picker, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MapView, { Marker } from 'react-native-maps'
import { api } from '../../../lib/api'
import axios from 'axios'
import styles from './styles'
import { IClient } from '../../../lib/interfaces'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'
import Spinner from 'react-native-loading-spinner-overlay'

const AddService: React.FC = () => {
  const navigation = useNavigation()
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0042,
    longitudeDelta: 0.0031
  })
  const [spinner, setSpinner] = useState<boolean>(false)

  const [clients, setClients] = useState<Array<IClient>>([])

  const getAllClients = async (): Promise<void> => {
    setSpinner(true)
    try {
      const clients = await axios.get(api.clients)
      setClients(clients.data)
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

  const handleSubmit = async (): Promise<void> => {
    setSpinner(true)
    try {
      const data = {
        problem: problem,
        client_id: selectedClient,
        user_id: '9a3aae77-bce5-4330-9a9b-cf573a96522f',
        status: 'pending',
        latlng: JSON.stringify(region)
      }
      await axios.post(api.so, { ...data })
      navigation.navigate('List')
      setSpinner(false)
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'OS Registrada',
        visibilityTime: 8000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40
      })
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

  const [selectedClient, setSelectedClient] = useState<string>('')
  const [problem, setProblem] = useState<string>('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async ({
        coords: { latitude, longitude }
      }: GeolocationPosition): Promise<void> =>
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002
        }),
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    )
    getAllClients()
  }, [])

  return (
    <View style={styles.container}>
      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={{ color: '#fff' }}
      />
      <View style={styles.containerMap}>
        <MapView
          style={styles.map}
          initialRegion={region}
          region={region}
          rotateEnabled={false}
          scrollEnabled={false}
          loadingEnabled={true}
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude
            }}
            title={`${region.latitude}, ${region.longitude}`}
            description={'Seu Local'}
          />
        </MapView>
      </View>
      <View style={styles.containerForm}>
        <Picker
          selectedValue={selectedClient}
          style={styles.pickerField}
          onValueChange={itemValue => setSelectedClient(itemValue)}
        >
          {clients.length > 0 &&
            clients.map(item => (
              <Picker.Item label={item.name} value={item.id} />
            ))}
        </Picker>

        <TextInput
          multiline={true}
          numberOfLines={6}
          value={problem}
          placeholder="Digite aqui o problema"
          style={styles.textAreaField}
          onChangeText={text => {
            setProblem(text)
          }}
        />

        <TouchableOpacity
          style={styles.buttonFloatBottom}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.buttonFloatText}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddService
