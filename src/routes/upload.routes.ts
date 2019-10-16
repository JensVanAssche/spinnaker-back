import { Router } from "express";
import { handleAsyncFn } from "tree-house";
import * as controller from "../controllers/upload.controller";
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, "data/img");
  },
  filename: function(_req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage });

export const routes = Router({ mergeParams: true }).post(
  "/",
  upload.single("file"),
  handleAsyncFn(controller.upload)
);
