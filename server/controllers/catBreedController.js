import asyncHndler from 'express-async-handler'
import { APIKEY, breedsUrl, imageurl } from '../utils/constants.js'
import axios from 'axios'
const getImage = async (id) => {
	const response = await axios.get(imageurl, {
		headers: { 'x-api-key': APIKEY },
		breed_ids: id,
	})
	const { data } = response
	return data
}

//@desc Fetch all cat breeds
//@route Get /api/breeds
//@access Public

const getCatBreeds = asyncHndler(async (req, res) => {
	const response = await axios.get(breedsUrl, {
		headers: { 'x-api-key': APIKEY },
	})
	const { data } = response
	const getAllData = await Promise.all(
		data.map(
			async ({
				id,
				name,
				description,
				temperament,
				origin,
				life_span,
				adaptability,
				affection_level,
				child_friendly,
				grooming,
				intelligence,
				health_issues,
				social_needs,
				stranger_friendly,
			}) => {
				const [image] = await getImage(id)
				return {
					id,
					name,
					description,
					temperament,
					origin,
					life_span,
					adaptability,
					affection_level,
					child_friendly,
					grooming,
					intelligence,
					health_issues,
					social_needs,
					stranger_friendly,
					image: image.url,
				}
			}
		)
	)
	console.log(getAllData)
	return res.json({ getAllData })
})

const getCatBreedByName = asyncHndler(async (req, res) => {
	const { name } = req.params

	const data = axios
		.get(searchUrl, {
			headers: {
				'api-key': APIKEY,
				query: name,
			},
		})
		.then((res) => console.log(res))
	const breedDetail = await data
	return res.json(breedDetail)
})

export { getCatBreedByName, getCatBreeds }
