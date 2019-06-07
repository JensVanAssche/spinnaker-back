var express = require("express");
var authRoutes = require("./auth.routes");

module.exports = express.Router({ mergeParams: true }).use("/auth", authRoutes);
