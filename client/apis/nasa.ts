import request from 'superagent'
import { NasaModel } from '../../models/nasaModel'

const rootUrl = '/api/v1/nasa'

export async function getNasaImages(): Promise<NasaModel> {
  const response = await request.get(`${rootUrl}`)
  return response.body
}
