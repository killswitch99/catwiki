import express from 'express'
const router = express.Router()

import {
	getCatBreedByName,
	getCatBreeds,
	getAllCatBreedsName,
} from '../controllers/catBreedController.js'

router.route('/').get(getCatBreeds)
router.route('/allbreednames').get(getAllCatBreedsName)
router.route('/:name').get(getCatBreedByName)

export default router
