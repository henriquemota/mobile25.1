import React from 'react'
import { Alert, Dimensions, Pressable, Text, TextInput, View } from 'react-native'

export default function Login() {
	const { width } = Dimensions.get('window')
	var nome = undefined

	function _handleButton() {
		Alert.alert('Atenção', `Bem vindo ${nome}`)
	}

	function _handleText(text) {
		nome = text
	}

	return (
		<View
			style={{
				backgroundColor: '#c3c3c3',
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				gap: 8,
				padding: 8,
			}}
		>
			<Text
				style={{
					fontSize: 48,
					textAlign: 'center',
				}}
			>
				Bem vindo ao Meu APP
			</Text>
			<TextInput
				placeholder='informe seu nome'
				autoCapitalize='none'
				keyboardType='email-address'
				style={{
					padding: 16,
					borderWidth: 1,
					width: width - 8,
					backgroundColor: '#fff',
					borderRadius: 4,
				}}
				onChangeText={_handleText}
			/>
			<Pressable
				style={{
					backgroundColor: '#235cd7',
					padding: 16,
					borderRadius: 16,
				}}
				onPressIn={function () {
					console.log('acabei de presssionar o botao')
				}}
				onPressOut={function () {
					console.log('acabei de soltar o botao')
				}}
				onLongPress={function () {
					console.log('estou segurando o botao')
				}}
				onPress={_handleButton}
			>
				<Text style={{ color: '#fff' }}>Boas vindas</Text>
			</Pressable>
		</View>
	)
}
