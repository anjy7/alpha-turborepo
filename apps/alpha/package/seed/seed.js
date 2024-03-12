// src/seed.ts
import { getPayload } from 'payload'
import dotenv from 'dotenv'
import { loadConfig } from '../loadConfig.ts'

dotenv.config()

export const seed = async () => {
  const config = await loadConfig('../payload.config')
  const payload = await getPayload({ config })

  const pages = await payload.create({
    collection: 'navbar',
    data: [
      {
        first: 'option1',
        second: 'option2',
      }
    ],
  })

  console.log(pages)
  process.exit(1)
}

seed()