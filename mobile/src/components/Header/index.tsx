import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import { Appbar, FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
})

interface HeaderProps {
  subtitle: string
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const navigation = useNavigation()

  return (
    <>
      <Appbar.Header focusable>
        <Appbar.Content title="PredialX" subtitle={props.subtitle} focusable />
      </Appbar.Header>
      <FAB
        focusable
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('Add')}
      />
    </>
  )
}

export default memo(Header)
