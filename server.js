const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()

var productsRouter = require('./src/products');
var productOptionsRouter = require('./src/productOptions');
var productAddonsRouter = require('./src/productAddons');
var salesRouter = require('./src/sales');
var salesProductsRouter = require('./src/salesProducts');
var campaignsRouter = require('./src/campaigns');
var campaignProductsRouter = require('./src/campaignProducts');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/products', productsRouter);
app.use('/productoptions', productOptionsRouter);
app.use('/productaddons', productAddonsRouter);
app.use('/sales', salesRouter);
app.use('/salesproducts', salesProductsRouter);
app.use('/campaigns', campaignsRouter);
app.use('/campaignproducts', campaignProductsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});