import { getDatabase } from '@/lib/mongodb'
import { hash } from 'bcryptjs'
import type { User } from '@/types/User'

export async function userRegister(
  email: string,
  password: string,
  name: string
): Promise<Omit<User, 'passwordHash'>> {
  const db = await getDatabase()
  const col = db.collection<User>('users')

  const exists = await col.findOne({ email })
  if (exists) {
    throw new Error('User already exists')
  }
  
  const passwordHash = await hash(password, 10)
  const result = await col.insertOne({ email, passwordHash, name })
  return { _id: result.insertedId.toString(), email, name }
}