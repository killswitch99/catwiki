import dotenv from 'dotenv'
dotenv.config()
const APIKEY = process.env.MYAPIKEY || ''
const breedsUrl = 'https://api.thecatapi.com/v1/breeds'
const searchUrl = 'https://api.thecatapi.com/v1/breeds/search'
const imageurl = 'https://api.thecatapi.com/v1/images/search?'

export { APIKEY, breedsUrl, searchUrl, imageurl }
