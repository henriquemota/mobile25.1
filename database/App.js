import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Alert, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import * as SQLite from 'expo-sqlite'
import { useEffect, useState } from 'react'

export default function App() {
	const [contatos, setContatos] = useState([])
	const [data, setData] = useState({ nome: '', telefone: '' })

	console.log(contatos)

	useEffect(() => {
		// initDB()
		readData()
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
			// Alert.alert('Atenção', 'Erro ao criar o banco de dados.')
		}
	}

	// insere os dados no banco de dados
	const insertData = async () => {
		let db = undefined
		try {
			db = await SQLite.openDatabaseAsync('mydb.db')
			await db.runAsync('INSERT INTO contatos (nome, telefone) VALUES (?,?)', [data.nome, data.telefone])
			setData({ nome: '', telefone: '' })
			// Alert.alert('Atenção', 'Dados inseridos com sucesso.')
		} catch (error) {
			console.log(error)
		} finally {
			if (db) db.closeAsync()
		}
	}

	// lê os dados do banco de dados
	const readData = async () => {
		let db = undefined
		try {
			db = await SQLite.openDatabaseAsync('mydb.db')
			const allRows = await db.getAllAsync('SELECT * FROM contatos;')
			setContatos(allRows)
			// for (const row of allRows) {
			// 	console.log(row.id, row.nome, row.telefone)
			// }
		} catch (error) {
			setContatos([])
			console.log(error)
		} finally {
			if (db) db.closeAsync()
		}
	}

	// remove os dados no banco de dados
	const deleteData = async (id) => {
		let db = undefined
		try {
			db = await SQLite.openDatabaseAsync('mydb.db')
			await db.runAsync('DELETE FROM contatos WHERE id = ?', [id])
			// Alert.alert('Atenção', 'Dados inseridos com sucesso.')
		} catch (error) {
			console.log(error)
		} finally {
			if (db) db.closeAsync()
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
			<Button
				title='Salvar dados'
				onPress={async () => {
					await insertData()
					await readData()
				}}
			/>
			<FlatList
				data={contatos}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={async () => {
							await deleteData(item.id)
							await readData()
						}}
						style={styles.item}
					>
						<Text style={styles.title}>
							{item.nome} - {item.telefone}
						</Text>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
			/>
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
	item: {
		backgroundColor: '#c3c3c3',
		padding: 8,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 16,
	},
})
