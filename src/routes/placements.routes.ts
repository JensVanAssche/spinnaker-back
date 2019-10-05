import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { placementsSchema } from "../schemes/placements.schema";
import * as controller from "../controllers/placements.controller";

export const routes = Router({ mergeParams: true }).get(
  "/:type",
  validateSchema(placementsSchema.getByType),
  handleAsyncFn((req, res) => controller.getByType(req, res))
);
