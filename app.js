const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const productRoutes = require("./routes/product");

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/api/product",productRoutes);

module.exports = app;
