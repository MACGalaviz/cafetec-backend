const express = require("express");
const Controller = require("../controllers/orden");
const api = express.Router();

api.post("/",Controller.post);
api.get("/",Controller.getAll);
api.get("/:id",Controller.getById);
api.patch("/:id",Controller.patch);

module.exports = api;
