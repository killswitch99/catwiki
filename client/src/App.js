import React from 'react'
import CatsProvider from './component/CatsContext'
import './App.css'
import HomeScreen from './screens/HomeScreen'

function App() {
	return (
		<div className="App">
			<CatsProvider>
				<HomeScreen />
			</CatsProvider>
		</div>
	)
}

export default App
