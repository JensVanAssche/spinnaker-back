import { Router } from "express";
import { handleAsyncFn } from "tree-house";
import * as controller from "../controllers/game.controller";

export const routes = Router({ mergeParams: true })
  .get("/", handleAsyncFn(controller.getAll))
  .get("/:childId", handleAsyncFn(controller.findByChildId));
