// import dotenv from 'dotenv'
// import path from 'path'
import payload from 'payload'
// import { seed as seedData } from './seed'

// dotenv.config({
//   path: path.resolve(__dirname, '../.env'),
// })

let cached = (global).payload

if (!cached) {
  cached = (global).payload = { client: null, promise: null }
}



export const getPayloadClient = async ({ initOptions, seed }) => {
  // if (!process.env.DATABASE_URI) {
  //   throw new Error('DATABASE_URI environment variable is missing')
  // }
  // if (!process.env.PAYLOAD_SECRET) {
  //   throw new Error('PAYLOAD_SECRET environment variable is missing')
  // }
  const PAYLOAD_SECRET = "";
    const MONGODB_URI = "";
  const PAYLOAD_CONFIG_PATH = "";
  if (cached.client) {
    return cached.client
  }
  if (!cached.promise) {
    cached.promise = payload.init({
        secret: PAYLOAD_SECRET,
        mongoURL: MONGODB_URI,
        config: PAYLOAD_CONFIG_PATH,
        local: true,
    })
  }
  try {
    // process.env.PAYLOAD_DROP_DATABASE = seed ? 'true' : 'false'
    cached.client = await cached.promise
    // if (seed) {
      payload.logger.info('---- SEEDING DATABASE ----')
      // await seedData(payload)
    // }
  } catch (e) {
    cached.promise = null
    throw e
  }
  return cached.client
}

getPayloadClient({ initOptions: {}, seed: true })