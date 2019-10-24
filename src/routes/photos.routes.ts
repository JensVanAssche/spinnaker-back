import { Router } from "express";
import { handleAsyncFn } from "tree-house";
// import { publicationsSchema } from "../schemes/publications.schema";
import * as controller from "../controllers/photos.controller";

export const routes = Router({ mergeParams: true })
  .get("/all/:offset", handleAsyncFn((req, res) => controller.getAll(req, res)))
  .get(
    "/albums/:offset",
    handleAsyncFn((req, res) => controller.getAlbums(req, res))
  )
  .get("/count", handleAsyncFn((req, res) => controller.getCount(req, res)))
  .get("/album/:id", handleAsyncFn((req, res) => controller.getAlbum(req, res)))
  .put(
    "/albums/:id",
    handleAsyncFn((req, res) => controller.updateAlbum(req, res))
  )
  .post("/albums", handleAsyncFn((req, res) => controller.addAlbum(req, res)))
  .post("/photos", handleAsyncFn((req, res) => controller.addPhoto(req, res)))
  .delete(
    "/albums/:id",
    handleAsyncFn((req, res) => controller.deleteAlbum(req, res))
  )
  .delete(
    "/photos/:id",
    handleAsyncFn((req, res) => controller.deletePhoto(req, res))
  );
