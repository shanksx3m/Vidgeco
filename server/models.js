const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  menge: String,
  mengeneinheit: String,
  lagerort: String,
  mhd: Date
});

const userSchema = mongoose.Schema({
  email: { type: String, unique: true, index: true },
  password: String,
  nameHousehold: String,
  products: [productSchema]
});

module.exports = {
  userSchema
}
