/*
Please ignore all the garbage below. This code exports a 
clientPromise which is really just a connection to Mongo Server
however it checks whether the promise has been resolved or rejected
I think this wil help with only making one connection to the MongoServer

*/


import { MongoClient } from 'mongodb'

const URI = process.env.MONGODB_URI
const options = {}

if (!URI) throw new Error('Please add your Mongo URI ro .env local')
let client = new MongoClient(URI, options)
let clientPromise = client.connect()
/*
if(process.env.NODE_ENV !== 'production') {
    if  (!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect()
    }

clientPromise = global._mongoClientPromise
} else {
    clientPromise = client.connect()
}
*/
export default clientPromise



/*
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
*/
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