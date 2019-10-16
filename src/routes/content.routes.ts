import { Router } from "express";
var multer = require("multer");
import { handleAsyncFn, validateSchema } from "tree-house";
import { contentSchema } from "../schemes/content.schema";
import * as controller from "../controllers/content.controller";

var imgStorage = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, "data/img");
  },
  filename: function(_req, file, cb) {
    cb(null, file.originalname);
  }
});

var pdfStorage = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, "data/pdf");
  },
  filename: function(_req, file, cb) {
    cb(null, file.originalname);
  }
});

var uploadImg = multer({ storage: imgStorage });
var uploadPdf = multer({ storage: pdfStorage });

export const routes = Router({ mergeParams: true })
  .get("/data", handleAsyncFn((req, res) => controller.getAll(req, res)))
  .get(
    "/data/:key",
    validateSchema(contentSchema.getByKey),
    handleAsyncFn((req, res) => controller.getByKey(req, res))
  )
  .put(
    "/data/:key",
    validateSchema(contentSchema.updateContent),
    handleAsyncFn((req, res) => controller.updateContent(req, res))
  )
  .post(
    "/img/:key",
    uploadImg.single("file"),
    handleAsyncFn(controller.updateImage)
  )
  .post("/pdf", uploadPdf.single("file"), handleAsyncFn(controller.updatePdf));
