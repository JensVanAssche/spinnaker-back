import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { childSchema } from "../schemes/child.schema";
import * as controller from "../controllers/child.controller";

export const routes = Router({ mergeParams: true })
  .post(
    "/",
    validateSchema(childSchema.create),
    handleAsyncFn(controller.create)
  )
  .get(
    "/:parentId",
    validateSchema(childSchema.getAll),
    handleAsyncFn(controller.getAll)
  )
  .delete(
    "/:id",
    validateSchema(childSchema.remove),
    handleAsyncFn(controller.remove)
  );
