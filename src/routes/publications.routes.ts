import { Router } from "express";
var multer = require("multer");
import { handleAsyncFn } from "tree-house";
import * as controller from "../controllers/publications.controller";

var pdfStorage = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, "data/pdf");
  },
  filename: function(_req, file, cb) {
    cb(null, file.originalname);
  }
});

var uploadPdf = multer({ storage: pdfStorage });

export const routes = Router({ mergeParams: true })
  .get("/", handleAsyncFn((req, res) => controller.getAll(req, res)))
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
