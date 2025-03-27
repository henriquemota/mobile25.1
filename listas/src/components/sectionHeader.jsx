import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from '../styles'
import Botao from './botao'
import { ItemLista } from './itemLista'

const SectionHeader = ({ data = [] }) => {
	return (
		<React.Fragment>
			<View
				style={[
					styles.containerHorizontal,
					{
						marginTop: 16,
						borderTopWidth: 1,
						borderBottomWidth: 1,
						borderColor: '#c3c3c3c3',
						paddingVertical: 16,
					},
				]}
			>
				<Text style={{ textTransform: 'uppercase', fontSize: 16, fontWeight: '400' }}>Section Header</Text>
				<Botao texto='View all' />
			</View>
			<View style={{ flex: 1 }}>
				<ScrollView>
					{data.map(function (item, key) {
						return <ItemLista key={key} description={item} bodyDescription={item} />
					})}
				</ScrollView>
			</View>
		</React.Fragment>
	)
}

export default SectionHeader
