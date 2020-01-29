import productSchema from './models/productModel';
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    password: String,
    //products: [productSchema]
});

module.exports = mongoose.model('UserModel', userSchema);