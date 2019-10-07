import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { standingsSchema } from "../schemes/standings.schema";
import * as controller from "../controllers/standings.controller";

export const routes = Router({ mergeParams: true }).get(
  "/:type",
  validateSchema(standingsSchema.getByType),
  handleAsyncFn((req, res) => controller.getByType(req, res))
);
