import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { playersSchema } from "../schemes/players.schema";
import * as controller from "../controllers/players.controller";

export const routes = Router({ mergeParams: true }).get(
  "/:type",
  validateSchema(playersSchema.getByType),
  handleAsyncFn((req, res) => controller.getByType(req, res))
);
