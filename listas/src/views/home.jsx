import { Feather } from '@expo/vector-icons'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Botao from '../components/botao'
import styles from '../styles'

import avatar from '../../assets/avatar.png'

const Home = () => {
	const data = []
	for (let i = 0; i < 10; i++) data.push(`Dados aleatórios ${i}`)

	return (
		<View style={[styles.container]}>
			{/* Item 01 */}
			<View style={[styles.containerHorizontal]}>
				<View>
					<Text style={{ fontWeight: 'bold', fontSize: 24 }}>Page Title</Text>
					<Text style={{ fontWeight: '200', fontSize: 18 }}>Subtitle</Text>
				</View>
				<View style={{ flexDirection: 'row', gap: 24, alignItems: 'center' }}>
					<Botao icone='search' />
					<Botao icone='more-horizontal' />
				</View>
			</View>
			{/* Item 02 */}
			<View
				style={[
					styles.containerHorizontal,
					{
						marginTop: 16,
						borderTopWidth: 1,
						borderBottomWidth: 1,
						borderColor: '#c3c3c3c3',
						paddingVertical: 16,
					},
				]}
			>
				<Text style={{ textTransform: 'uppercase', fontSize: 16, fontWeight: '400' }}>Section Header</Text>
				<Botao texto='View all' />
			</View>
			<View style={{ flex: 1 }}>
				<ScrollView>
					{[
						<ItemData key={1} />,
						<ItemData key={2} />,
						<ItemData key={3} />,
						<ItemData key={4} />,
						<ItemData key={5} />,
					]}
					{data.map(function (item, key) {
						return <ItemData key={key} />
					})}
				</ScrollView>
			</View>
			{/* Item 03 */}
			<View style={[styles.containerHorizontal, { justifyContent: 'space-around', paddingVertical: 8 }]}>
				<Botao icone='home' />
				<Botao icone='heart' />
				<Botao icone='shopping-cart' />
				<Botao icone='search' />
				<Botao icone='user' />
			</View>
		</View>
	)
}

const ItemData = ({ description = 'Row Header', bodyDescription = 'Body copy description' }) => {
	return (
		<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
			<TouchableOpacity
				style={{
					borderWidth: 1,
					backgroundColor: '#fff',
					height: 40,
					width: 40,
					borderRadius: 20,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Image source={avatar} />
			</TouchableOpacity>

			<View style={{ flex: 1, marginHorizontal: 16, justifyContent: 'center' }}>
				<Text style={{ fontWeight: 'bold', fontSize: 16 }}>{description}</Text>
				<Text style={{ fontWeight: '200' }}>{bodyDescription}</Text>
			</View>

			<TouchableOpacity>
				<Feather name='chevron-right' size={24} />
			</TouchableOpacity>
		</View>
	)
}

export default Home
