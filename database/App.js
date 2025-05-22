import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Alert, TextInput, Button } from 'react-native'
import * as SQLite from 'expo-sqlite'
import { useEffect, useState } from 'react'

export default function App() {
	const [data, setData] = useState({ nome: '', telefone: '' })

	useEffect(() => {
		initDB()
	}, [])

	// inicializa o banco de dados
	const initDB = async () => {
		try {
			const db = await SQLite.openDatabaseAsync('mydb.db')
			await db.execAsync(`
        CREATE TABLE IF NOT EXISTS contatos (
          id INTEGER PRIMARY KEY NOT NULL, 
          nome TEXT NOT NULL,
          telefone TEXT NOT NULL
        );
				`)
			//Alert.alert('Atenção', 'Database criado com sucesso.')
		} catch (error) {
			Alert.alert('Atenção', 'Erro ao criar o banco de dados.')
		}
	}

	const insertData = async () => {
		try {
			const db = await SQLite.openDatabaseAsync('mydb.db')
			await db.runAsync('INSERT INTO contatos (nome, telefone) VALUES (?,?)', [data.nome, data.telefone])
			setData({ nome: '', telefone: '' })
			Alert.alert('Atenção', 'Dados inseridos com sucesso.')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<View style={styles.container}>
			<TextInput placeholder='Nome' style={styles.input} onChangeText={(text) => setData({ ...data, nome: text })} />
			<TextInput
				placeholder='Telefone'
				style={styles.input}
				onChangeText={(text) => setData({ ...data, telefone: text })}
			/>
			<Button title='Salvar dados' onPress={insertData} />
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		padding: 16,
		backgroundColor: '#fff',
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingLeft: 8,
	},
})
