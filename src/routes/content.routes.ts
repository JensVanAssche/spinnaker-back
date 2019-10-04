import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { contentSchema } from "../schemes/content.schema";
import * as controller from "../controllers/content.controller";

export const routes = Router({ mergeParams: true })
  .get("/", handleAsyncFn((req, res) => controller.getAll(req, res)))
  .get(
    "/:key",
    validateSchema(contentSchema),
    handleAsyncFn((req, res) => controller.getByKey(req, res))
  );
