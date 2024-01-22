class ProductController {
  constructor(productModel) {
    this.productModel = productModel;
  }

  async getProducts() {
    return await this.productModel.getAllProducts();
  }

  async getProduct(id) {
    return await this.productModel.getProductById(id);
  }
}

module.exports = ProductController;
