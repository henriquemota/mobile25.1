import { Text, View } from 'react-native'
import Botao from '../components/botao'
import SectionHeader from '../components/sectionHeader'
import styles from '../styles'

const Home = () => {
	const data1 = []
	for (let i = 0; i < 10; i++) data1.push(`Dados aleatórios de bla ${i}`)
	const data2 = []
	for (let i = 0; i < 10; i++) data2.push(`Dados aleatórios de ble ${i}`)

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
			<SectionHeader data={data1} />
			<SectionHeader data={data2} />
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
