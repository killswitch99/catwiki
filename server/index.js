import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import catBreedRoutes from './routes/catBreedsRoutes.js'

dotenv.config()
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())

// Have Node serve the files for our built React app

app.get('/api', (req, res) => {
	res.json({ message: 'This page' })
})
app.use('/api/breeds/', catBreedRoutes)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, '../client/build')))
	// All other GET requests not handled before will return our React app
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
	})
} else {
	app.get('/', (req, res) => {
		res.send('API is running')
	})
}

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
