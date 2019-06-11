import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import * as controller from "../controllers/config.controller";
import { configSchema } from "../schemes/config.schema";

export const routes = Router({ mergeParams: true })
  .get(
    "/:childId",
    validateSchema(configSchema.getAll),
    handleAsyncFn(controller.getAll)
  )
  .put(
    "/",
    validateSchema(configSchema.updateConfig),
    handleAsyncFn(controller.updateConfig)
  );
