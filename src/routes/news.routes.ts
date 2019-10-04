import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { newsSchema } from "../schemes/news.schema";
import * as controller from "../controllers/news.controller";

export const routes = Router({ mergeParams: true })
  .get("/", handleAsyncFn((req, res) => controller.getAll(req, res)))
  .get(
    "/:id",
    validateSchema(newsSchema),
    handleAsyncFn((req, res) => controller.getById(req, res))
  );
