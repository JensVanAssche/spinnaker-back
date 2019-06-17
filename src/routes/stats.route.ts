import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import * as controller from "../controllers/stats.controller";
import { statsSchema } from "../schemes/stats.schema";

export const routes = Router({ mergeParams: true })
  .get(
    "/:childId",
    validateSchema(statsSchema.getStats),
    handleAsyncFn(controller.getStats)
  )
  .post(
    "/",
    validateSchema(statsSchema.createStat),
    handleAsyncFn(controller.createStat)
  );
