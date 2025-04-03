import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = () => {
	const { goBack } = useNavigation()

	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<Text style={{ textAlign: 'center' }}>Home</Text>
			<Button title='Voltar para login' onPress={goBack} />
		</View>
	)
}

export default Home
