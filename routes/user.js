const express = require("express");
const Controller = require("../controllers/user");
const api = express.Router();

api.get("/",Controller.getAll);



module.exports = api;
