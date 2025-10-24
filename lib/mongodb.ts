import { MongoClient } from 'mongodb'

// Make MongoDB connection optional for build process
const uri = process.env.MONGODB_URI
const options = {}

let client: MongoClient | undefined
let clientPromise: Promise<MongoClient> | undefined

if (uri) {
  if (process.env.NODE_ENV === 'development') {
    let globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>
    }

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options)
      globalWithMongo._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongo._mongoClientPromise
  } else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
}

export default clientPromise

