import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { registerRootComponent } from 'expo'

// importacao das telas
import HomeScreen from './src/views/home'
import LoginScreen from './src/views/login'
import Pagina1Screen from './src/views/pagina1'
import Pagina2Screen from './src/views/pagina2'
import Pagina3Screen from './src/views/pagina3'

const { Navigator, Screen } = createNativeStackNavigator()
// const { Navigator, Screen } = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: true }} initialRouteName='login'>
				<Screen name='login' component={LoginScreen} options={{ title: 'Login' }} />
				<Screen name='home' component={HomeScreen} options={{ title: 'Home' }} />
				<Screen name='pagina1' component={Pagina1Screen} options={{ title: 'Página 1' }} />
				<Screen name='pagina2' component={Pagina2Screen} options={{ title: 'Página 2' }} />
				<Screen name='pagina3' component={Pagina3Screen} options={{ title: 'Página 3' }} />
			</Navigator>
		</NavigationContainer>
	)
}

// registra o router
registerRootComponent(App)
