const ProductController = require("../controllers/ProductController");
const ProductModel = require("../models/Productmodel");

const productRouter = require("express").Router();
const productModel = new ProductModel();
const productController = new ProductController(productModel);

productRouter.get("", async (req, res) => {
  const products = await productController.getProducts();

  return res.json(products);
});

productRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await productController.getProduct(id);

  return res.json(product);
});

module.exports = productRouter;
