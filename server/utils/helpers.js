import axios from 'axios'
import { APIKEY, imageurl } from '../utils/constants.js'
//@desc Fetches cat image with id
//@route Get /api/breeds
//@access Public
const getImage = async (id) => {
	const response = await axios.get(imageurl, {
		headers: { 'x-api-key': APIKEY },
		breed_ids: id,
	})
	const { data } = response
	return data
}

const formatData = (cats) => {
	return cats.map(
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
}
const formatId = (cats) => {
	return cats.map(async ({ name }) => {
		return name
	})
}
export { formatData, formatId }
