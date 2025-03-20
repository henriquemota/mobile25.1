import React from 'react'
import { Image, Text, View } from 'react-native'
import guest from '../assets/guest.jpeg'
import styles from '../styles'

const Home = () => {
	const { container, screenCenter, title } = styles
	const img = {
		uri: 'https://www.lumiapresentacoes.com.br/wp/wp-content/uploads/2019/10/logo-estacio.png',
		height: 160,
		width: 160,
	}

	return (
		<View style={[container, screenCenter]}>
			<Text style={[title]}>Bem vindo ao APP Interfaces</Text>
			<Image source={img} />
			<Image source={guest} />
		</View>
	)
}

export default Home
