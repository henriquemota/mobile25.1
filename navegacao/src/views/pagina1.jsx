import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Pagina1 = () => {
	const { navigate } = useNavigation()

	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<Text style={{ textAlign: 'center', fontSize: 24 }}>Pagina 1</Text>
			<Button title='Página 2' onPress={() => navigate('pagina2')} />
			<Button title='Página 3' onPress={() => navigate('pagina3')} />
		</View>
	)
}

export default Pagina1
