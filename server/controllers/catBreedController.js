import asyncHndler from 'express-async-handler'
import { APIKEY, breedsUrl, searchUrl } from '../utils/constants.js'
import axios from 'axios'
import { formatData } from '../utils/helpers.js'

//@desc Fetch all cat breeds
//@route Get /api/breeds
//@access Public

const getCatBreeds = asyncHndler(async (req, res) => {
	const response = await axios.get(breedsUrl, {
		headers: { 'x-api-key': APIKEY },
	})
	const { data } = response
	const getAllData = await Promise.all(formatData(data))
	return res.json({ getAllData })
})

//@desc Fetch a single cat breed
//@route Get /api/breeds/:name
//@access Public
const getCatBreedByName = asyncHndler(async (req, res) => {
	const { name } = req.params
	const response = await axios.get(searchUrl, {
		headers: {
			q: name,
			'x-api-key': APIKEY,
		},
	})
	const { data } = response
	const getAllData = await Promise.all(formatData(data))
	return res.json(getAllData)
})

export { getCatBreedByName, getCatBreeds }
