const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
  menge: String,
  mengeneinheit: String,
  lagerort: String,
  mhd: String
});

const userSchema = mongoose.Schema({
  email: { type: String, unique: true, index: true },
  password: String,
  householdName: String,
  products: [productSchema]
});

module.exports = {
  userSchema
}
