const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { userSchema } = require('./models')

const app = express()
const port = 3001
let userModel
mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/login/:email/:password', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')

  if (!userModel) {
    return res.status(503).end()
  }

  try {
    const { email, password } = req.params
    const user = await userModel.findOne({ email }).lean()
    console.log(user)

    if (!user) {
      return res.status(404).send('No user registered with this email')
    }

    if (user.password !== password) {
      return res.status(401).send('Wrong password')
    }

    res.status(200).send(user)
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
})

app.post('/register', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')

  if (!userModel) {
    return res.status(503).end()
  }

  try {
    if (!req.body) {
      return res.status(400).end('Missing body')
    }

    const { email, password, householdName } = req.body
    if (!email || !password || !householdName) {
      return res.status(400).send('Missing field in body')
    }

    // Überprüfung ob bereits ein user mit dieser Email in der DB existiert
    const user = await userModel.findOne({ email }).lean()
    if (user) {
      return res.status(400).end('Email already in use')
    }

    // Füge einen neuen user hinzu, wenn noch keiner mit dieser Email existiert
    const newUser = await userModel.findOneAndUpdate({ email }, { $setOnInsert: { email, password, householdName } }, { upsert: true, new: true }).lean()
    console.log(newUser)

    res.status(200).send(newUser)
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
})

app.post('/changePassword', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')

  if (!userModel) {
    return res.status(503).end()
  }

  try {
    if (!req.body) {
      return res.status(400).end('Missing body')
    }

    const { email, password, newPassword } = req.body
    if (!email || !password || !newPassword) {
      return res.status(400).send('Missing field in body')
    }

    const user = await userModel.findOne({ email }).lean()

    if (!user) {
      return res.status(400).end('No user with this email found')
    }

    if (user.password !== password) {
      return res.status(401).send('Wrong password')
    }

    const updatedUser = await userModel.findOneAndUpdate({ email }, { password: newPassword }, { new: true }).lean()

    res.status(200).send(updatedUser)
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
})

// createProduct
// deleteUser
// deleteProduct
// changeProduct



async function connectToMongoDB() {
  const connection = mongoose.createConnection('mongodb+srv://vidgecoApp:wUm3yHfG4abT9pPL@vidgeco-pfqjo.mongodb.net/test?retryWrites=true&w=majority');
  userModel = connection.model('user', userSchema)
  await userModel.ensureIndexes()
}

connectToMongoDB()
