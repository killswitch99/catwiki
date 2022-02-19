import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'
export const CatsContext = createContext([])

const CatsProvider = ({ children }) => {
	const [breeds, setBreeds] = useState([])
	const [catName, setCatName] = useState('')
	const [breedsNameList, setBreedsNameList] = useState([])
	const [loading, setIsLoading] = useState(true)

	const handleInputChange = (event) => {
		setCatName(event.target.value)
	}

	useEffect(async () => {
		const { data } = await axios.get('/api/breeds/allbreednames')
		const getAllData = await Promise.all(data)
		setBreedsNameList(getAllData)
	}, [])
	return (
		<CatsContext.Provider
			value={{
				breeds,
				catName,
				breedsNameList,
				loading,
				handleInputChange,
			}}
		>
			{children}
		</CatsContext.Provider>
	)
}
export default CatsProvider
