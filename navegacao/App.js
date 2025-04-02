import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'

const Stack = createNativeStackNavigator()

function Home() {
	const { navigate } = useNavigation()

	return (
		<View>
			<Text>Home</Text>
			<Button title='Vai para a tela sobre' onPress={() => navigate('about')} />
		</View>
	)
}

function About() {
	const { goBack } = useNavigation()

	return (
		<View>
			<Text>About</Text>
			<Button title='Voltar' onPress={goBack} />
		</View>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: true }}>
				<Stack.Screen name='home' component={Home} options={{ title: 'Home' }} />
				<Stack.Screen name='about' component={About} option={{ title: 'Sobre' }} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
