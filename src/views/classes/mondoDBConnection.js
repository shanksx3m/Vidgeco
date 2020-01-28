// passwort wUm3yHfG4abT9pPL



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://vidgecoApp:<wUm3yHfG4abT9pPL>@vidgeco-pfqjo.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
