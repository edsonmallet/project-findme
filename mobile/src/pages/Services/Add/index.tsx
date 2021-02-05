import React, { useEffect, useState } from 'react'
import { Picker, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MapView, { Marker } from 'react-native-maps'
import { api } from '../../../lib/api'
import axios from 'axios'
import styles from './styles'
import { IClient } from '../../../lib/interfaces'
import Toast from 'react-native-toast-message'

const AddService: React.FC = () => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0042,
    longitudeDelta: 0.0031
  })

  const [clients, setClients] = useState<Array<IClient>>([])

  const getAllClients = async (): Promise<void> => {
    try {
      const clients = await axios.get(api.clients)
      setClients(clients.data)
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

  const [selectedValue, setSelectedValue] = useState<string>('')

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
          selectedValue={selectedValue}
          style={styles.pickerField}
          onValueChange={itemValue => setSelectedValue(itemValue)}
        >
          {clients &&
            clients.map(client => (
              <Picker.Item label={client.name} value={client.id} />
            ))}
        </Picker>

        <TextInput
          multiline={true}
          numberOfLines={6}
          value=""
          placeholder="Digite aqui o problema"
          style={styles.textAreaField}
        />

        <TouchableOpacity style={styles.buttonFloatBottom}>
          <Text style={styles.buttonFloatText}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddService
