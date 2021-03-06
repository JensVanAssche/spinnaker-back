import { Router } from "express";
var multer = require("multer");
var path = require("path");
import { handleAsyncFn } from "tree-house";
import * as controller from "../controllers/results.controller";

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
    "/:type",
    handleAsyncFn((req, res) => controller.getByType(req, res))
  )
  .post(
    "/pdf/:id",
    uploadPdf.single("file"),
    handleAsyncFn((req, res) => controller.updatePdf(req, res))
  )
  .put(
    "/tournament/:id",
    handleAsyncFn((req, res) => controller.updateTournament(req, res))
  )
  .put(
    "/score/:id",
    handleAsyncFn((req, res) => controller.updateScore(req, res))
  )
  .post(
    "/pdf",
    uploadPdf.single("file"),
    handleAsyncFn((req, res) => controller.addPdf(req, res))
  )
  .post(
    "/tournament",
    handleAsyncFn((req, res) => controller.addTournament(req, res))
  )
  .post(
    "/score",
    handleAsyncFn((req, res) => controller.addScore(req, res))
  )
  .delete(
    "/pdf/:id",
    handleAsyncFn((req, res) => controller.deletePdf(req, res))
  )
  .delete(
    "/tournament/:id",
    handleAsyncFn((req, res) => controller.deleteTournament(req, res))
  )
  .delete(
    "/score/:id",
    handleAsyncFn((req, res) => controller.deleteScore(req, res))
  );
