import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Pagina3 = () => {
	const { goBack, navigate } = useNavigation()

	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<Text style={{ textAlign: 'center', fontSize: 24 }}>Pagina 3</Text>
			<Button title='Voltar' onPress={goBack} />
		</View>
	)
}

export default Pagina3
