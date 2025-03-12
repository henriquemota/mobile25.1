import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 16,
	},
	containerCenter: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	rouded: {
		borderRadius: '50%',
	},
	button: {
		backgroundColor: 'blue',
		borderRadius: 8,
		padding: 16,
	},
	buttonText: {
		color: '#f3f3f3',
	},
	colors: {
		red: {
			backgroundColor: 'red',
		},
		blue: {
			backgroundColor: 'blue',
		},
		green: {
			backgroundColor: 'green',
		},
	},
})

export default styles
