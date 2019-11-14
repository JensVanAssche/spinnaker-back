import { Router } from "express";
import { handleAsyncFn } from "tree-house";
import * as controller from "../controllers/upload.controller";
var multer = require("multer");
var path = require("path");

var storage = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, "./build/data/img");
  },
  filename: function(_req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({
  fileFilter: function(_req, file, cb) {
    var filetypes = /png|jpg|jpeg/;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(
      "Error: File upload only supports the following filetypes - " + filetypes
    );
  },
  storage
});

export const routes = Router({ mergeParams: true })
  .post("/", upload.single("file"), handleAsyncFn(controller.upload))
  .post("/multiple", upload.array("file"), handleAsyncFn(controller.upload));
