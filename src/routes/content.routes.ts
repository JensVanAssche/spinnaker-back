import { Router } from "express";
var multer = require("multer");
var path = require("path");
import { handleAsyncFn } from "tree-house";
import * as controller from "../controllers/content.controller";

var imgStorage = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, "./build/data/img");
  },
  filename: function(_req, file, cb) {
    cb(null, file.originalname);
  }
});

var pdfStorage = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, "./build/data/pdf");
  },
  filename: function(_req, file, cb) {
    cb(null, file.originalname);
  }
});

var uploadImg = multer({
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
  storage: imgStorage
});
var uploadPdf = multer({
  fileFilter: function(_req, file, cb) {
    var filetypes = /pdf/;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(
      "Error: File upload only supports the following filetypes - " + filetypes
    );
  },
  storage: pdfStorage
});

export const routes = Router({ mergeParams: true })
  .get(
    "/data",
    handleAsyncFn((req, res) => controller.getAll(req, res))
  )
  .get(
    "/data/:key",
    handleAsyncFn((req, res) => controller.getByKey(req, res))
  )
  .put(
    "/data/:key",
    handleAsyncFn((req, res) => controller.updateContent(req, res))
  )
  .post(
    "/img/:key",
    uploadImg.single("file"),
    handleAsyncFn(controller.updateImage)
  )
  .post("/pdf", uploadPdf.single("file"), handleAsyncFn(controller.updatePdf));
