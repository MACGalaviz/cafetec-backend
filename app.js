const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const ordenRoutes = require("./routes/orden");

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/api/product",productRoutes);
app.use("/api/user",userRoutes);
app.use("/api/orden",ordenRoutes);

module.exports = app;
