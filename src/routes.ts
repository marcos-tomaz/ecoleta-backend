import express, { response } from 'express'
import connection from './database/connection'

const routes = express.Router()

routes.get('/items', async (request, response) => {
	const items = await connection('items').select('*')

	const serializedItems = items.map((item) => ({
		title: item.title,
		imageUrl: `${process.env.API_URL}/uploads/${item.image}`
		
	}))

	return response.json(serializedItems)
})

export default routes
