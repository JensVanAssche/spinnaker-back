var express = require("express");
var controller = require("../controllers/auth.controller");

module.exports = express.Router({ mergeParams: true }).get("/", controller.get);
