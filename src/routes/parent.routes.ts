import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { parentSchema } from "../schemes/parent.schema";
import * as controller from "../controllers/parent.controller";

export const routes = Router({ mergeParams: true }).post(
  "/",
  validateSchema(parentSchema.create),
  handleAsyncFn(controller.create)
);
