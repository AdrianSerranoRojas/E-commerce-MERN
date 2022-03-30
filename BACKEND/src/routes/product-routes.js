const Router = require("express").Router;

const { authMiddleware } = require("../middleware/auth-middleware");
const productController = require("../controllers/product-controller");

const ProductRouter = Router();

ProductRouter.use("/admin", authMiddleware);

ProductRouter.get("/products", productController.getProducts);
ProductRouter.get("/products/:productId", productController.getSingleProduct);
ProductRouter.post("/admin/products", productController.createProduct);
ProductRouter.patch(
  "/admin/products/:productId",
  productController.updateProduct
);
ProductRouter.delete(
  "/admin/products/:productId",
  productController.deleteProduct
);

module.exports = ProductRouter;
