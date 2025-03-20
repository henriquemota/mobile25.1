import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Home = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#f9f9f9', padding: 8, paddingTop: 32, paddingBottom: 0 }}>
			<SectionHeader />
			<SectionContent />
			<SectionContent />
			<SectionContent />
			<SectionFooter />
		</View>
	)
}

const SectionHeader = () => {
	return (
		<View
			style={{
				flexDirection: 'row',
				gap: 4,
				justifyContent: 'space-between',
				alignItems: 'center',
				marginBottom: 16,
			}}
		>
			<View>
				<Text style={{ fontSize: 24, fontWeight: 'bold' }}>Page title</Text>
				<Text style={{ fontSize: 16, fontWeight: 'ultralight' }}>Page Subtitle</Text>
			</View>
			<View style={{ flexDirection: 'row', gap: 16 }}>
				<TouchableOpacity>
					<Feather name='search' size={24} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Feather name='more-horizontal' size={24} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const SectionContent = () => {
	return (
		<React.Fragment>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
				<Text style={{ fontSize: 20, textTransform: 'uppercase' }}>Section header</Text>
				<TouchableOpacity style={{ backgroundColor: '#e2dfdf', padding: 8, borderRadius: 32 }}>
					<Text style={{ fontSize: 12, fontWeight: 'ultralight' }}>View all</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 1 }}></View>
		</React.Fragment>
	)
}

const SectionFooter = () => {
	return (
		<View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 8, padding: 12 }}>
			<TouchableOpacity>
				<Feather name='home' size={32} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Feather name='heart' size={32} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Feather name='shopping-cart' size={32} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Feather name='search' size={32} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Feather name='user' size={32} />
			</TouchableOpacity>
		</View>
	)
}

export default Home
