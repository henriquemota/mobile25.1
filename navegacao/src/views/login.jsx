import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Login = () => {
	const { navigate } = useNavigation()

	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<Text style={{ textAlign: 'center', gap: 8, fontSize: 24 }}>Login</Text>
			<Button title='Realizar login' onPress={() => navigate('home')} />
		</View>
	)
}

export default Login
