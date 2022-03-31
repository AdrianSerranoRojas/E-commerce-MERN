const db = require("../models");
const { logger } = require("../config/config");

async function createProduct(req, res, next) {
  const { title, author, genre, year, pages } = req.body;

  try {
    const product = await db.Product.create({
      title: title,
      author: author,
      genre: genre,
      year: year,
      pages: pages,
    });

    res.status(201).send({
      data: product._id,
    });
  } catch (error) {
    next(error);
  }
}

async function getProducts(req, res, next) {
  try {
    const products = await db.Product.find({})
      .lean()
      .exec();

    res.status(200).send({
      data: products,
    });
  } catch (error) {
    next(error);
  }
}

async function getSingleProduct(req, res, next) {
  const { productId } = req.params;

  try {
    const product = await db.Product.findOne({ _id: productId })
      .select({
        title: 1,
        pages: 1,
      })
      .populate({
        path: "author",
        select: {
          firstName: 1,
          lastName: 1,
        },
      })
      .lean()
      .exec();

    res.status(200).send({
      data: product,
    });
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  const { productId } = req.params;
  const { title, pages } = req.body;

  try {
    const product = await db.Product.findOneAndUpdate(
      { _id: productId },
      {
        $set: {
          title: title,
          pages: pages,
        },
      },
      { new: true }
    );

    res.status(200).send({
      data: product,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  const { productId } = req.params;
  console.log(productId);

  try {
    await db.Product.findOneAndDelete({ _id: productId });

    // res.status(200).send({
    //   data: { _id: product._id },
    // });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createProduct: createProduct,
  getProducts: getProducts,
  getSingleProduct: getSingleProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
};
