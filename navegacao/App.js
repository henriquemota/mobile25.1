import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'

const Stack = createNativeStackNavigator()

function Home() {
	return (
		<View>
			<Text>Home</Text>
		</View>
	)
}

function About() {
	return (
		<View>
			<Text>About</Text>
		</View>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='home' component={Home} />
				<Stack.Screen name='about' component={About} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
