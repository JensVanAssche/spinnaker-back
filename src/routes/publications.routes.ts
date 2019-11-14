import { Router } from "express";
var multer = require("multer");
var path = require("path");
import { handleAsyncFn } from "tree-house";
import * as controller from "../controllers/publications.controller";

var pdfStorage = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, "./build/data/pdf");
  },
  filename: function(_req, file, cb) {
    cb(null, file.originalname);
  }
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
    "/",
    handleAsyncFn((req, res) => controller.getAll(req, res))
  )
  .post(
    "/:id",
    uploadPdf.single("file"),
    handleAsyncFn((req, res) => controller.updatePublication(req, res))
  )
  .post(
    "/",
    uploadPdf.single("file"),
    handleAsyncFn((req, res) => controller.addPublication(req, res))
  )
  .delete(
    "/:id",
    handleAsyncFn((req, res) => controller.deletePublication(req, res))
  );
