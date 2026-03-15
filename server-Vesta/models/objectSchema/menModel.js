const mongoose = require("mongoose");
const Schema = mongoose.schema

const Menschema = new Schema({
  title: String,
  price: Number,
  image: String
});

const Men = mangoose.model('MenGarments', Menschema)

module.exports = Men
