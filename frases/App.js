import React from 'react'
import { Alert, Button, Text, TouchableOpacity, View } from 'react-native'
import data from './data'
import styles from './estilos'

export default function App() {
	function _handlePress() {
		const indice = Math.floor(Math.random() * data.length)
		Alert.alert('Atenção', data[indice])
	}

	return (
		<View style={[styles.container, styles.containerCenter]}>
			<Text>Bem vindo ao APP Frases do Dia</Text>
			<Button title='Clique para sortear uma frase' onPress={_handlePress} />
			<TouchableOpacity style={[styles.button]} onPress={_handlePress}>
				<Text style={[styles.buttonText]}>Clique para sortear uma frase</Text>
			</TouchableOpacity>
		</View>
	)
}
