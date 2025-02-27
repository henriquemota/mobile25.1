import React from 'react'
import { Text, View } from 'react-native'

const container = {
	flex: 1,
	justifyContent: 'center',
}
const text = {
	padding: 4,
	margin: 10,
	fontSize: 32,
	backgroundColor: 'yellow',
}

const data = []
for (let i = 0; i < 10; i++) data.push(`item de número ${i + 1}`)

export default function App() {
	return (
		<View key={1} style={container}>
			{data.map(function (element, index) {
				return (
					<Text key={index} style={text}>
						{element}
					</Text>
				)
			})}
		</View>
	)
}
