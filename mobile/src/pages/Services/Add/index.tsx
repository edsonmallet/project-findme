import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MapView, { Marker } from 'react-native-maps'
import SelectClient from '../../../components/SelectClient'
import styles from './styles'

const AddService: React.FC = () => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0042,
    longitudeDelta: 0.0031
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // success
      async ({
        coords: { latitude, longitude }
      }: GeolocationPosition): Promise<void> =>
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002
        }),
      // error
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    )
  })

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
        <SelectClient />

        <TextInput
          multiline={true}
          numberOfLines={4}
          value=""
          placeholder="Digite aqui o problema"
        />

        <TouchableOpacity style={styles.buttonFloatBottom}>
          <Text>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddService
