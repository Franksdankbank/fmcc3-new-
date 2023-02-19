import { MongoClient } from 'mongodb'
let db
let people



const URI = process.env.MONGODB_URI
const options = {}


  


if (!URI) throw new Error('Please add your Mongo URI ro .env local')
let client = new MongoClient(URI, options)

export async function getPeople() {
    client.connect()
    db =  client.db()
    people = db.collection('people')
    const result = await people
        .find({})
        .map(user => ({ ...user, _id: user._id.toString() }))
        .toArray()
        client.close()
        return { people : result }
}
/*
import { MongoClient } from 'mongodb'

const URI = process.env.MONGODB_URI
const options = {}

if (!URI) throw new Error('Please add your Mongo URI ro .env local')
let client = new MongoClient(URI, options)
let clientPromise

if(process.env.NODE_ENV !== 'production') {
    if  (!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect()
    }

clientPromise = global._mongoClientPromise
} else {
    clientPromise = client.connect()
}
export default clientPromise
*/