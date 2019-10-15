import { Router } from "express";
import { handleAsyncFn } from "tree-house";
// import { publicationsSchema } from "../schemes/publications.schema";
import * as controller from "../controllers/photos.controller";

export const routes = Router({ mergeParams: true })
  .get("/all", handleAsyncFn((req, res) => controller.getAll(req, res)))
  .get("/albums", handleAsyncFn((req, res) => controller.getAlbums(req, res)))
  .get(
    "/album/:id",
    handleAsyncFn((req, res) => controller.getAlbum(req, res))
  );
