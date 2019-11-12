import { Router } from "express";
var multer = require("multer");
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

var uploadImg = multer({ storage: imgStorage });
var uploadPdf = multer({ storage: pdfStorage });

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
