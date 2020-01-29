const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    menge: String,
    mengeneinheit: String,
    lagerort: String,
    mhd: Date
});

module.exports = mongoose.model('ProductModel', productSchema);