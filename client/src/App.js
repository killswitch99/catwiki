import React from 'react'
import CatsProvider from './component/CatsContext'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import CatsDetailsScreen from './screens/CatsDetailsScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<CatsProvider>
			<Router>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/:name" element={<CatsDetailsScreen />} />
				</Routes>
			</Router>
		</CatsProvider>
	)
}

export default App
