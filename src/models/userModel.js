const mongoose = require('mongoose');
import { productSchema } from "./productModel";

export const userSchema = mongoose.Schema({
    email: { type: String, unique: true, index: true },
    password: String,
    nameHousehold: String,
    products: [productSchema]
});
