//Autor: Hannes Vaupel; Matrikelnummer:1290217; Kurs: BIS-268 Mobile Computing, WiSe 2019/20, Merz;
const mongoose = require('mongoose');

//mongoose Schema dienen zur einfachen behandlung von Objekten für MongoDB

//Schema für einzelne Produkte
const productSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
  menge: String,
  mengeneinheit: String,
  lagerort: String,
  mhd: String
});

//Schema für den gesamten User
//Das productSchema wird als Array implementiert um alle Produkte direkt im User-Objekt zu speichern
//So wird in der Datenbank lediglich ein Objekt abgelegt
const userSchema = mongoose.Schema({
  email: { type: String, unique: true, index: true },
  password: String,
  householdName: String,
  products: [productSchema]
});

//Das Modul exportier immer das gesamte userSchema und nicht ein einzelnes Produkt
module.exports = {
  userSchema
}
