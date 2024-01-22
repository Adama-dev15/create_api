const productsData = require("../../fake_data");

class Productmodel {
  constructor() {
    this.products = productsData;
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(productId) {
    return this.products.find((product) => product.id == productId);
  }

  addProduct(productData) {
    const newProduct = {
      id: this.products.length + 1,
      ...productData,
    };

    this.products.push(newProduct);
    return newProduct;
  }
}

module.exports = Productmodel;
