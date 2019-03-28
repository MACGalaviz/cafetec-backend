const express = require("express");
const Controller = require("../controllers/product");
const api = express.Router();

api.get("/",Controller.getAll);
api.get("/:id",Controller.getById);
api.post("/",Controller.post);
api.patch("/:id",Controller.patch);

module.exports = api;
