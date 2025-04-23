import axios from 'axios'
import React, { useState } from 'react'
import { ActivityIndicator, Button, TextInput, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const Home = () => {
	const [texto, setTexto] = useState()
	const [loading, setLoading] = useState(false)
	const [coordenada, setCoordenada] = useState({})
	const initialRegion = {
		latitude: -3.7617664,
		longitude: -38.4958464,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	}

	const handleCEP = () => {
		const url = `https://cep.awesomeapi.com.br/json/${texto}`
		axios
			.get(url)
			.then((r) => {
				const { lat, lng } = r.data
				setCoordenada({
					latitude: Number(lat),
					longitude: Number(lng),
				})
				console.log('sucesso', r.data)
			})
			.catch((e) => {
				setCoordenada({})
				console.error('erro', e)
			})
			.finally(() => console.log('Requisição finalizada!'))
	}

	return (
		<View style={{ flex: 1 }}>
			<TextInput
				style={{ borderWidth: 1, padding: 8, marginTop: 32, marginHorizontal: 4, marginBottom: 8, borderRadius: 4 }}
				placeholder='informe o cep'
				maxLength={8}
				keyboardType='number-pad'
				onChangeText={setTexto}
			/>
			<Button title='Busca CEP' onPress={handleCEP} />
			<ActivityIndicator animating={loading} />
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
