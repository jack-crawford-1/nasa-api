import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()
const token = process.env.NASA_API_TOKEN

router.get('/', async (req, res, next) => {
  // if (token === undefined) {
  //   throw new Error('NASA_API_TOKEN is not defined')
  // }

  try {
    const nasaImages = await request.get(
      `https://api.nasa.gov/planetary/apod?api_key=${token}`,
    )

    res.json(nasaImages.body)
  } catch (error) {
    next(error)
  }
})

export default router
