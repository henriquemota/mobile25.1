import { Feather } from '@expo/vector-icons'
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native'

import avatar from '../../assets/avatar.png'

const ItemLista = (props) => {
	const { description = 'Row Header', bodyDescription = 'Body copy description' } = props
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

const ItemListaSwipe = (props) => {
	const toggleSwitch = (e) => {
		// setIsEnabled(previousState => !previousState)
		console.log(e)
	}

	const { description = 'Row Header', bodyDescription = 'Body copy description' } = props
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
			<Switch onValueChange={toggleSwitch} />
		</View>
	)
}

export { ItemLista, ItemListaSwipe }
export default ItemLista
