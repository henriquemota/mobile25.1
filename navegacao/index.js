import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { registerRootComponent } from 'expo'

// importacao das telas
import HomeScreen from './src/views/home'
import LoginScreen from './src/views/login'

const Stack = createNativeStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='login'>
				<Stack.Screen name='home' component={HomeScreen} options={{ title: 'Tela inicial' }} />
				<Stack.Screen name='login' component={LoginScreen} options={{ title: 'Bem vindo ao meu App' }} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

// registra o router
registerRootComponent(App)
