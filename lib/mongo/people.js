
//import clientPromise from '.'
import { MongoClient } from 'mongodb'

export default class MyClass {
    
    constructor() {
        this.clientPromise = MongoClient.connect(process.env.MONGODB_URI)
      // constructor code here
      //this.clientPromise = clientPromise;

    }
  
    async getPeople() {
        const client = await this.clientPromise
        //client = await clientPromise
        const db = await client.db()
        const people = await db.collection('people')
        const result = await people
        .find({})
        .map(user => ({ ...user, _id: user._id.toString() }))
        .toArray()

        return { people : result }
    } catch (error) {
        return { error: 'Failed to fetch people'}
    }
      // method1 code here get method to be used for 
      //my API endpoint
    
  
    async method2() {
      // method2 code here add method to add things
      //also i will need other methods
    }
  }
  



































/*
const URI = process.env.MONGODB_URI
const options = {}
if (!URI) throw new Error('Please add your Mongo URI ro .env local')
let client = new MongoClient(URI, options)

 async function updatePeople(person) {
    await client.connect()
    const collection = client.db("Cluster0").collection("people")
     const numPeople = (await collection.find({})).toArray().length     

    for(let i=0; i < numPeople; i++){
        let person1 =   (await collection.find({})).toArray()[i]
        if(/*!(person.name === person1.name) || !(person.email === person1.email)true){
            const filter = { _id: 1 }
    const update = {
      $set: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'mysecret'
      }
    };
            const options = { upsert: true }
            const result = await collection.insertOne({name: "john", email: 'johndoe@example.com', password: 'mysecret'})
            console.log(`User added with ID ${result.insertedId}`)

        }
    }
    

    await client.close()

}

const newPerson = {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123"
  }
  
  export default updatePeople

  */
/*
let client
let db
let people

async function init() {
    if (db) return
    try{
        client = await clientPromise
        db = await client.db()
        people = await db.collection('people')
    } catch (error) {
        throw new Error('Failed to Establish connection with database')
    }
}

;(async () => {
    await init()
})()
// getPeople is the database acess object
export async function getPeople() {
    try {
        if(!people) await init()
        const result = await people
        .find({})
        //.limit(20)
        .map(user => ({ ...user, _id: user._id.toString() }))
        .toArray()

        return { people : result }
    } catch (error) {
        return { error: 'Failed to fetch people'}
    }
}
*/