import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { historySchema } from "../schemes/history.schema";
import * as controller from "../controllers/history.controller";

export const routes = Router({ mergeParams: true }).get(
  "/:key",
  validateSchema(historySchema.getByKey),
  handleAsyncFn((req, res) => controller.getByKey(req, res))
);
