import MyClass from '@lib/mongo/people'
const myClassInstance = new MyClass();

const handler = async (req, res) => {
    if(req.method === 'GET'){
        try {
            const { people, error } = await myClassInstance.getPeople()
            if (error) throw new Error(error)

            return res.status(200).json({ people })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
    res.setHeader('Allow', ['GET'])
    res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler

