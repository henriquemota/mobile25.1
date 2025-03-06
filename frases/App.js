import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
	bgcolors: {
		red: {
			backgroundColor: '#ff0000',
		},
		blue: {
			backgroundColor: '#0000ff',
		},
		green: {
			backgroundColor: '#00ff00',
		},
	},
	container: {
		flex: 1,
		// flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default function App() {
	const {circle,container, bgcolors: { red, green, blue}} = styles // prettier-ignore

	const data = [
		'A persistência é o caminho do êxito.',
		'A maior glória em viver não está em nunca cair, mas em nos levantar cada vez que caímos.',
		'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.',
		'Não é a força, mas a constância dos bons sentimentos que conduz os homens à felicidade.',
		'No meio da dificuldade encontra-se a oportunidade.',
		'Que os vossos esforços desafiem as impossibilidades, lembrai-vos de que as grandes coisas do homem foram conquistadas do que parecia impossível.',
		'Se você quer viver uma vida feliz, amarre-se a uma meta, não às pessoas ou coisas.',
		'Não espere por uma crise para descobrir o que é importante em sua vida.',
		'Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.',
		'Não importa o quão devagar você vá, desde que você não pare.',
	]

	function sayHello() {
		Alert.alert('Mensagem', 'Olá, bem vindo ao React Native')
	}

	function sortear() {
		const indice = Math.floor(Math.random() * data.length)
		Alert.alert('Mensagem', data[indice])
	}

	return (
		<View style={[container]}>
			<Text>Bem vindo ao APP Frases</Text>
			<Button title='Clique para sortear' onPress={sortear} />
		</View>
	)
}
