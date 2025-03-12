import React from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'

export default function App() {
	let login = '',
		senha = ''
	function _handleChangeTextLogin(text) {
		login = text
	}
	function _handleChangeTextSenha(text) {
		senha = text
	}

	function _handleButton() {
		if (login === 'henrique' && senha === 'senha') Alert.alert('Mensagem', `Bem vindo ${login}`)
		else Alert.alert('Erro', `${login} você não tem acesso`)
	}

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#c3c3c3',
				flexWrap: 'wrap',
				gap: 16,
				padding: 8,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text style={{ fontSize: 48, textAlign: 'center' }}>Bem vindo ao APP Login</Text>
			<TextInput
				placeholder='informe seu login'
				autoCapitalize='none'
				keyboardType='web-search'
				onChangeText={_handleChangeTextLogin}
				style={{ borderWidth: 1, borderRadius: 4, padding: 8, backgroundColor: '#fff', width: '100%' }}
			/>
			<TextInput
				placeholder='informe sua senha'
				autoCapitalize='none'
				keyboardType='web-search'
				onChangeText={_handleChangeTextSenha}
				secureTextEntry
				style={{ borderWidth: 1, borderRadius: 4, padding: 8, backgroundColor: '#fff', width: '100%' }}
			/>
			<Button title='Realizar login' onPress={_handleButton} />
		</View>
	)
}
