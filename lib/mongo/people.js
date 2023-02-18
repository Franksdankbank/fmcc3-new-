import clientPromise from '.'

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