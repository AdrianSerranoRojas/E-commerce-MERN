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
  img: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    required: true,
  },
  unitsInStock: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  votes: {
    upVotes: {
      upperLimit: {
        type: Number,
        required: true,
      },
      currentValue: {
        type: Number,
        required: true,
      }
    },
    downVotes: {
      lowerLimit: {
        type: Number,
        required: true,
      },
      currentValue: {
        type: Number,
        required: true,
        }
      },
    },
    author: {
      id: {
        type: String,
        required: true
      },
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
    },
  }
);

const ProductModel = new mongoose.model("products", ProductSchema);

module.exports = ProductModel;
