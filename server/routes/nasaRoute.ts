import express from 'express'
import request from 'superagent'
import 'dotenv/config'


const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const nasaImages = await request.get(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`,
    )

    res.json(nasaImages.body)
  } catch (error) {
    res.sendStatus(500)
    next(error)
  }
})

export default router
