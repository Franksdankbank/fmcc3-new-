import getPeople from '@lib/people';



// here I want to define that I want to update shit

export async function updatePeople() {
    try {
        if(!people) await init()
        const d1b = client.db(this.dbName);
        const people = db.collection('people');
        const result = await people.insertOne({ name, email });
        /*
        const result = await people
        .find({})
        //.limit(20)
        .map(user => ({ ...user, _id: user._id.toString() }))
        .toArray()

        return { people : result }
        */
    } catch (error) {
        return { error: 'Failed to fetch people'}
    }
}





















/*


import { MongoClient } from 'mongodb';


const { MongoClient } = require('mongodb');

class UsersDAO {
  constructor(url, dbName) {
    this.url = url;
    this.dbName = dbName;
  }
  
  async getUsers() {
    const client = await MongoClient.connect(this.url);
    const db = client.db(this.dbName);
    const users = db.collection('people');
    const result = await users.find().toArray();
    client.close();
    return result;
  }
}

module.exports = UsersDAO;
*/

