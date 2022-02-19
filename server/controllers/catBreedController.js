import asyncHndler from 'express-async-handler'
import { APIKEY, breedsUrl, searchUrl } from '../utils/constants.js'
import axios from 'axios'
import { formatData, formatId } from '../utils/helpers.js'

//@desc Fetch all cat breeds
//@route Get /api/breeds
//@access Public

const getCatBreeds = asyncHndler(async (req, res) => {
	const { data } = await axios.get(breedsUrl, {
		headers: { 'x-api-key': APIKEY },
	})
	const getAllData = await Promise.all(formatData(data))
	return res.json({ getAllData })
})

//@desc Fetch a single cat breed
//@route Get /api/breeds/:name
//@access Public
const getCatBreedByName = asyncHndler(async (req, res) => {
	const { name } = req.params
	const { data } = await axios.get(searchUrl, {
		headers: {
			'x-api-key': APIKEY,
		},
		params: {
			q: name,
		},
	})
	const getAllData = await Promise.all(data)
	return res.json(getAllData)
})

//@desc Fetch a single cat breed
//@route Get /api/breeds/allbreednames
//@access Public
const getAllCatBreedsName = asyncHndler(async (req, res) => {
	const { data } = await axios.get(breedsUrl, {
		headers: { 'x-api-key': APIKEY },
	})
	const getAllData = await Promise.all(formatId(data))
	return res.json(getAllData)
})

export { getCatBreedByName, getCatBreeds, getAllCatBreedsName }
