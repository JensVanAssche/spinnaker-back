import { Router } from "express";
import { handleAsyncFn } from "tree-house";
// import { publicationsSchema } from "../schemes/publications.schema";
import * as controller from "../controllers/videos.controller";

export const routes = Router({ mergeParams: true })
  .get("/", handleAsyncFn((req, res) => controller.getAll(req, res)))
  .put("/:id", handleAsyncFn((req, res) => controller.updateVideo(req, res)))
  .post("/", handleAsyncFn((req, res) => controller.addVideo(req, res)))
  .delete(
    "/:id",
    handleAsyncFn((req, res) => controller.deleteVideo(req, res))
  );
