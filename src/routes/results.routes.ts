import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { resultsSchema } from "../schemes/results.schema";
import * as controller from "../controllers/results.controller";

export const routes = Router({ mergeParams: true }).get(
  "/:type",
  validateSchema(resultsSchema.getByType),
  handleAsyncFn((req, res) => controller.getByType(req, res))
);
