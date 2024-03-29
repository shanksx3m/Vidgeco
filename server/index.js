//Autor: Hannes Vaupel; Matrikelnummer:1290217; Kurs: BIS-268 Mobile Computing, WiSe 2019/20, Merz;
//Die index.js umfasst alle Funktionen des Backend Servers
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

//get-Funktion die die Logindaten überprüft und bei Erfolg den User zurück gibt
app.get('/login/:email/:password', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')

  if (!userModel) {
    return res.status(503).end()
  }

  try {
    const { email, password } = req.params
    const user = await userModel.findOne({ email }).lean()

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

//post-Funktion die einen User Registriert und eine Meldung zurück gibt
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

    res.status(200).send(newUser)
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
})

//post-Funktion die das Passwort ändert und den User erneut zurück gibt
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

//post-Funktion die den Haushaltnamen ändert und den User erneut zurück gibt
app.post('/updateHousehold', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')

  if (!userModel) {
    return res.status(503).end()
  }

  try {
    if (!req.body) {
      return res.status(400).end('Missing body')
    }

    const { userId, householdName } = req.body
    if (!userId || !householdName) {
      return res.status(400).send('Missing field in body')
    }

    const updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { householdName }, { new: true }).lean()

    res.status(200).send(updatedUser)
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
})

//post-Funktion die den Nutzer komplett löscht und einemeldung zurück gibt
app.post('/deleteUser', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')

  if (!userModel) {
    return res.status(503).end()
  }

  try {
    if (!req.body) {
      return res.status(400).end('Missing body')
    }

    const { userId } = req.body
    if (!userId) {
      return res.status(400).send('Missing field in body')
    }

    await userModel.deleteOne({ _id: userId })

    res.status(200).send('Success')
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
})

//post-Funktion die ein neues Produkt anlegt und den User erneut zurück gibt
app.post('/createProduct', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')

  if (!userModel) {
    return res.status(503).end()
  }

  try {
    if (!req.body) {
      return res.status(400).end('Missing body')
    }

    const { userId, product } = req.body
    if (!userId || !product) {
      return res.status(400).send('Missing field in body')
    }

    const { name, menge, mengeneinheit } = product
    if (!name || !menge || !mengeneinheit) {
      return res.status(400).send('Missing field in product')
    }

    const updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $push: { products: product } }, { new: true }).lean()

    if (!updatedUser) {
      return res.status(400).end('No user with this _id found')
    }

    res.status(200).send(updatedUser)
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
})

//post-Funktion die ein Produkt ändert und den User erneut zurück gibt
app.post('/updateProduct', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')

  if (!userModel) {
    return res.status(503).end()
  }

  try {
    if (!req.body) {
      return res.status(400).end('Missing body')
    }

    const { productId, product } = req.body
    if (!productId || !product) {
      return res.status(400).send('Missing field in body')
    }

    const { name, menge, mengeneinheit } = product
    if (!name || !menge || !mengeneinheit) {
      return res.status(400).send('Missing field in product')
    }

    const updatedUser = await userModel.findOneAndUpdate({ 'products._id': productId }, { $set: { 'products.$': product } }, { new: true }).lean()

    if (!updatedUser) {
      return res.status(400).end('No user with this _id found')
    }

    res.status(200).send(updatedUser)
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
})

//post-Funktion die das Produkt löscht und den User erneut zurück gibt
app.post('/deleteProduct', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')

  if (!userModel) {
    return res.status(503).end()
  }

  try {
    if (!req.body) {
      return res.status(400).end('Missing body')
    }

    const { userId, productId } = req.body
    if (!userId || !productId) {
      return res.status(400).send('Missing field in body')
    }

    const status = await userModel.updateOne({ _id: userId }, { $pull: { products: { _id: productId } } }).lean()

    if (!status.nModified) {
      return res.status(400).end(`Didn't find product with specified id`)
    }

    const updatedUser = await userModel.findOne({ _id: userId }).lean()

    res.status(200).send(updatedUser)
  } catch (error) {
    console.log(error)
    return res.status(500).end()
  }
})

async function connectToMongoDB() {
  const connection = mongoose.createConnection('mongodb+srv://vidgecoApp:wUm3yHfG4abT9pPL@vidgeco-pfqjo.mongodb.net/test?retryWrites=true&w=majority');
  userModel = connection.model('user', userSchema)
  await userModel.ensureIndexes()
}

connectToMongoDB()
