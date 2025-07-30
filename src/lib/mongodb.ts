// src/lib/mongodb.ts
import { MongoClient } from 'mongodb'

const uri = process.env.NEXT_PUBLIC_MONGODB_URI
const dbName = process.env.NEXT_PUBLIC_MONGODB_DB


if (!uri) throw new Error('Please define MONGODB_URI in .env.local')
if (!dbName) throw new Error('Please define MONGODB_DB in .env.local')

let cachedClient: MongoClient | null = null

export async function getMongoClient() {
  if (cachedClient) return cachedClient
  const client = new MongoClient(uri)
  await client.connect()
  cachedClient = client
  return client
}

export async function getDatabase() {
  const client = await getMongoClient()
  return client.db(dbName)
}
