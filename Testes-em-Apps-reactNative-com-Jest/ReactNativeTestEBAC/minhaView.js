import React from 'react'
import { Button, TextInput, View } from 'react-native'


export default function MinhaView() {
  return (
    <View>
      <TextInput
        value='Meu texto'
      />
      <Button
        title='clique aqui'
        onPress={cliqueAqui}
      />
    </View>
  )
}

export function cliqueAqui() {
  return true
}