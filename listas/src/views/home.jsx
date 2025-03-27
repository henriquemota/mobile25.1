import { ScrollView, Text, View } from 'react-native'
import Botao from '../components/botao'
import ItemLista from '../components/itemLista'
import styles from '../styles'

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
						<ItemLista key={1} />,
						<ItemLista key={2} />,
						<ItemLista key={3} />,
						<ItemLista key={4} />,
						<ItemLista key={5} />,
					]}
					{data.map(function (item, key) {
						return <ItemLista key={key} />
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

export default Home
