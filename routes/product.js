const express = require("express");
const Controller = require("../controllers/product");
const api = express.Router();

api.get("/",Controller.getAll);



module.exports = api;
