import React, { memo } from 'react'
import { Appbar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import styles from '../../pages/Services/Add/styles'

interface HeaderProps {
  subtitle: string
  buttonBack?: boolean
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const navigation = useNavigation()

  return (
    <View>
      <Appbar.Header focusable>
        <Appbar.Content title="PredialX" subtitle={props.subtitle} focusable />
        {props.buttonBack && (
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        )}
      </Appbar.Header>
    </View>
  )
}

export default memo(Header)
