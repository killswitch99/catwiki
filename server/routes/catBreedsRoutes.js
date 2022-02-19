import express from 'express'
const router = express.Router()

import {
	getCatBreedByName,
	getCatBreeds,
} from '../controllers/catBreedController.js'

router.route('/').get(getCatBreeds)
router.route('/:name').get(getCatBreedByName)

export default router
