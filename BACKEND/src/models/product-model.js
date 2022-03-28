const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const ProductModel = new mongoose.model("products", ProductSchema);

module.exports = ProductModel;
