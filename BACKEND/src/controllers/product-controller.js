const db = require("../models");
const { logger } = require("../config/config");

async function createProduct(req, res, next) {
  console.log("reqBody", req);
  const {
    title,
    price,
    img,
    shortDescription,
    longDescription,
    unitsInStock,
  } = req.body.newProduct;
  const uid = req.body.uid;
  const email = req.body.email;

  try {
    const product = await db.Product.create({
      title: title,
      price: price,
      img: img,
      shortDescription: shortDescription,
      longDescription: longDescription,
      unitsInStock: unitsInStock,
      quantity: 0,
      isFavorite: false,
      author: {
        email: email,
        id: uid,
      },
      votes: {
        upVotes: {
          upperLimit: 10,
          currentValue: 0,
        },
        downVotes: {
          lowerLimit: 10,
          currentValue: 0,
        },
      },
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
    const products = await db.Product.find({}).lean().exec();

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
    const result = await db.Product.deleteOne({
      _id: productId,
    }).lean();
    console.log(result);
    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "Product removed",
      });
    } else {
      res.status(500).send({
        data: "Product not removed",
      });
    }
  } catch (error) {
    console.log(error.message);
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
