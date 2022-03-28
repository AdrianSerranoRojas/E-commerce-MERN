const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const cors = require("cors");

const userRouter = require("./routes/user-routes");
// const productsRouter = require("./routes/products-routes");
const config = require("./config/config");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.use(cors());

app.use(userRouter);
// app.use(productsRouter);

module.exports = app;
