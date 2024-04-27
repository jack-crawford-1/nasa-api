import express from 'express'
import * as Path from 'node:path'
import nasaRoutes from './routes/nasaRoute.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/nasa', nasaRoutes)

server.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    console.error(err)
    if (res.headersSent) {
      return next(err)
    }
    res.status(500).json({ error: 'Internal Server Error' })
  },
)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
