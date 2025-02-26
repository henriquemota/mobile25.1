import React from 'react'
import { Text, View } from 'react-native'

export default function App() {
	const data = []
	for (let i = 0; i < 100; i++) data.push(`elemento de número ${i + 1}`)

	return (
		<View style={{ flex: 1, gap: 4 }}>
			<View>
				{data.map(function (element, index) {
					return (
						<View key={index} style={{ backgroundColor: 'yellow', padding: 4 }}>
							<Text>{element}</Text>
						</View>
					)
				})}
			</View>
		</View>
	)
}
