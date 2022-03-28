const mongoose = require("mongoose");

function connect() {
  return mongoose.connect("mongodb+srv://Admin:Admin@cluster0.gqwlk.mongodb.net/Ecommerce?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
}

module.exports = connect;
