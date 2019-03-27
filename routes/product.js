const express = require("express");
const userController = require("../controllers/product");
const api = express.Router();

api.get("/",userController.getAll);



module.exports = api;
