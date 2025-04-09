import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = () => {
	const { goBack, navigate } = useNavigation()

	return (
		<View style={{ flex: 1, gap: 8, justifyContent: 'center' }}>
			<Text style={{ textAlign: 'center', fontSize: 24 }}>Home</Text>
			<Button title='Voltar' onPress={goBack} />
			<Button title='Página 1' onPress={() => navigate('pagina1')} />
			<Button title='Página 2' onPress={() => navigate('pagina2')} />
			<Button title='Página 3' onPress={() => navigate('pagina3')} />
		</View>
	)
}

export default Home
