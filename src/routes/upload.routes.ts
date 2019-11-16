import { Router } from "express";
import * as controller from "../controllers/upload.controller";
import { handleAsyncFn } from "tree-house";
var multer = require("multer");
var path = require("path");

var storage = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, __dirname + "/../data");
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
  .post(
    "/single/:size",
    upload.single("file"),
    handleAsyncFn((req, res) => controller.upload(req, res))
  )
  .post(
    "/multiple/:size",
    upload.array("file"),
    handleAsyncFn((req, res) => controller.uploadMultiple(req, res))
  );
