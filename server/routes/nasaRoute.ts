import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

router.get('/', async (req, res, next) => {
  const token = process.env.NASA_API_TOKEN
  if (token === undefined) {
    throw Error
  }

  try {
    const nasaImages = await request.get(
      `https://api.nasa.gov/planetary/apod?api_key=${token}`,
    )

    res.json(nasaImages.body)
  } catch (error) {
    res.sendStatus(500)
    next(error)
  }
})

export default router
