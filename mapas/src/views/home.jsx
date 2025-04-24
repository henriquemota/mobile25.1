import axios from 'axios'
import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const Home = () => {
	const URL = 'https://cep.awesomeapi.com.br/json/'
	const [cep, setCep] = useState('')
	const [dados, setDados] = useState()
	const [coordenada, setCoordenada] = useState({})
	const initialRegion = {
		latitude: -3.7617664,
		longitude: -38.4958464,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	}

	const _handleButton = () => {
		axios
			.get(URL + cep)
			.then(({ data }) => {
				setDados(data)
				const { lat, lng } = data
				setCoordenada({
					latitude: Number(lat),
					longitude: Number(lng),
				})
			})
			.catch((e) => {
				setDados(undefined)
				setCoordenada({})
			})
			.finally(() => console.log('Sempre por aqui'))
	}

	return (
		<View style={{ flex: 1, gap: 8, paddingTop: 32 }}>
			<TextInput
				placeholder='Informe o CEP'
				maxLength={8}
				keyboardType='number-pad'
				style={{ borderWidth: 1, padding: 8, marginHorizontal: 8, borderRadius: 6 }}
				onChangeText={setCep}
			/>
			<View style={{ marginHorizontal: 8 }}>
				<Button title='Clique aqui' onPress={_handleButton} />
			</View>
			{dados && (
				<View style={{ marginHorizontal: 8 }}>
					<Text>{dados.address}</Text>
					<Text>
						{dados.district}, {dados.city} - {dados.state}
					</Text>
					<Text>{dados.cep}</Text>
				</View>
			)}
			<MapView
				style={{ flex: 1 }}
				initialRegion={initialRegion}
				region={
					'latitude' in coordenada
						? {
								...initialRegion,
								latitude: coordenada.latitude,
								longitude: coordenada.longitude,
						  }
						: initialRegion
				}
			>
				{'latitude' in coordenada && (
					<Marker
						title='poderia ser qualquer coisa'
						coordinate={{ latitude: coordenada.latitude, longitude: coordenada.longitude }}
					/>
				)}
			</MapView>
		</View>
	)
}

export default Home
