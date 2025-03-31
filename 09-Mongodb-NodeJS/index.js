import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'

const dbURL = 'mongodb://127.0.0.1:27017'
const PORT = 5000

const client = new MongoClient(dbURL)
const app = express()
app.use(express.json())

let collection
async function connectDB() {
  await client.connect()
  const db = client.db('studentdb')
  collection = db.collection('students')
  console.log('Connected to MongoDB')
}

app.post('/newStudent', async (req, res) => {
  try {
    const result = await collection.insertOne(req.body)
    res.status(201).json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.get('/students', async (req, res) => {
  try {
    const students = await collection.find().toArray()
    res.json(students)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.put('/students/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    )
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.delete('/students/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await collection.deleteOne({ _id: new ObjectId(id) })
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
}).catch(err => {
  console.error('Error connecting to MongoDB:', err)
})
