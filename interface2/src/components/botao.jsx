import { Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity } from 'react-native'

const Botao = ({ icone = null, texto = null }) => {
	return (
		<TouchableOpacity style={[texto ? { backgroundColor: '#c3c3c3c3', padding: 8, borderRadius: 16 } : {}]}>
			{icone && <Feather name={icone} size={24} />}
			{texto && <Text>{texto}</Text>}
		</TouchableOpacity>
	)
}

export default Botao
