const db = require("../models");
const { getSeedUsers, getSeedProducts } = require("./seed-data");

async function seedProducts() {
  await Promise.all([db.User.deleteMany({}), db.Product.deleteMany({})]);
  const users = await db.User.insertMany([...getSeedUsers()]);
  return db.Product.insertMany([...getSeedProducts()]);
}

module.exports = {
  seedProducts: seedProducts,
};
