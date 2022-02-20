import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'
export const CatsContext = createContext([])

const CatsProvider = ({ children }) => {
	const [breeds, setBreeds] = useState([])
	const [breedsNameList, setBreedsNameList] = useState([])
	const [loading, setIsLoading] = useState(true)
	const [searchQ, setSearchQ] = useState('')

	const getBreeds = async () => {
		const { data } = await axios.get('/api/breeds')
		setBreeds(data.list)
		setIsLoading(false)
	}
	const getAllBreedName = async () => {
		const { data } = await axios.get('/api/breeds/allbreednames')
		const getAllData = await Promise.all(data)
		setBreedsNameList(getAllData)
	}

	useEffect(() => {
		getAllBreedName()
		getBreeds()
	}, [])
	return (
		<CatsContext.Provider
			value={{
				breeds,
				breedsNameList,
				loading,
				searchQ,
				setSearchQ,
			}}
		>
			{children}
		</CatsContext.Provider>
	)
}
export default CatsProvider
