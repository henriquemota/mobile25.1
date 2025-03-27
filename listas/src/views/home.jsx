import { Text, View } from 'react-native'
import Botao from '../components/botao'
import SectionHeader from '../components/sectionHeader'
import styles from '../styles'

const Home = () => {
	const data = Array.from({ length: 10 }, (_, index) => ({
		description: `Person ${index + 1}`,
		bodyDescription: [
			'Computer Science',
			'Business Administration',
			'Mechanical Engineering',
			'Psychology',
			'Graphic Design',
			'Medicine',
			'Law',
			'Architecture',
			'Marketing',
			'Physics',
		][Math.floor(Math.random() * 10)],
	}))

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
			<SectionHeader data={data} />
			<SectionHeader data={data} />
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
