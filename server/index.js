const express = require('express')
const mongoose = require('mongoose');
const { userSchema } = require('./models')

const app = express()
const port = 3001
let userModel

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/login/:email/:password', async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")

  if (!userModel) {
    return res.status(503).end()
  }

  const { email, password } = req.params
  const user = await userModel.findOne({ email }).lean()
  console.log(user)

  if (!user) {
    return res.status(404).send('No user registered with this email')
  }

  if (user.password !== password) {
    return res.status(401).send('Wrong password')
  }

  res.status(200).json({ userId: user._id })
})

// app.post('/register', (req, res, next) => {

// })

async function connectToMongoDB() {
  const connection = mongoose.createConnection('mongodb+srv://vidgecoApp:wUm3yHfG4abT9pPL@vidgeco-pfqjo.mongodb.net/test?retryWrites=true&w=majority');
  userModel = connection.model('user', userSchema)
  await userModel.ensureIndexes()
}

connectToMongoDB()
