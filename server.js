const express = require("express");
const productRouter = require("./src/routes/product");

const PORT = 3000;
//create server
const app = express();
app.use(express.json());

app.use("/products", productRouter);
app.listen(PORT, () => {
  console.log(`Server is ruining on port ${PORT}`);
});
