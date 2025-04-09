import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

const Login = () => {
	const { navigate } = useNavigation()
	const [estado, setEstado] = useState({login:'', senha: ''})

	return (
		<View style={{ flex: 1, justifyContent: 'center', gap: 8 }}>
			<Text style={{ textAlign: 'center', fontSize: 24 }}>Login</Text>
			<TextInput 
				style={{ borderWidth: 1, padding: 8 }} 
				placeholder='informe seu login' 
				onChangeText={t => setEstado({...estado, login: t})}
			/>
			<TextInput 
				style={{ borderWidth: 1, padding: 8 }} 
				placeholder='informe sua senha' 
				onChangeText={t => setEstado({...estado, senha: t})}
			/>
			<Text>{JSON.stringify(estado)}</Text>
			<Button 
				title='Realizar login' 
				onPress={() => navigate('home', estado)} 
			/>
		</View>
	)
}

export default Login
