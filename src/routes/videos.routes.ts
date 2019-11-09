import { Router } from "express";
import { handleAsyncFn } from "tree-house";
import * as controller from "../controllers/videos.controller";

export const routes = Router({ mergeParams: true })
  .get("/all", handleAsyncFn((req, res) => controller.getAll(req, res)))
  .get(
    "/all/:offset",
    handleAsyncFn((req, res) => controller.getByOffset(req, res))
  )
  .get("/count", handleAsyncFn((req, res) => controller.getCount(req, res)))
  .put("/:id", handleAsyncFn((req, res) => controller.updateVideo(req, res)))
  .post("/", handleAsyncFn((req, res) => controller.addVideo(req, res)))
  .delete(
    "/:id",
    handleAsyncFn((req, res) => controller.deleteVideo(req, res))
  );
