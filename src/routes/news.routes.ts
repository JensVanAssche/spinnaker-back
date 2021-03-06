import { Router } from "express";
import { handleAsyncFn } from "tree-house";
import * as controller from "../controllers/news.controller";

export const routes = Router({ mergeParams: true })
  .get("/all/:offset", handleAsyncFn((req, res) => controller.getAll(req, res)))
  .get(
    "/article/:id",
    handleAsyncFn((req, res) => controller.getById(req, res))
  )
  .get("/latest", handleAsyncFn((req, res) => controller.getLatest(req, res)))
  .get("/count", handleAsyncFn((req, res) => controller.getCount(req, res)))
  .put("/:id", handleAsyncFn((req, res) => controller.updateArticle(req, res)))
  .post("/", handleAsyncFn((req, res) => controller.addArticle(req, res)))
  .delete(
    "/:id",
    handleAsyncFn((req, res) => controller.deleteArticle(req, res))
  );
