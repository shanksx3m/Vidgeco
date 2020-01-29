const mongoose = require('mongoose');

export const productSchema = mongoose.Schema({
    name: String,
    menge: String,
    mengeneinheit: String,
    lagerort: String,
    mhd: Date
});
