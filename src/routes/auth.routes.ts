import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { authSchema } from "../schemes/auth.schema";
import * as controller from "../controllers/auth.controller";

export const routes = Router({ mergeParams: true })
  .post(
    "/login",
    validateSchema(authSchema.login),
    handleAsyncFn(controller.login)
  )
  .post("/logout", handleAsyncFn(controller.logout))
  .get("/me", handleAsyncFn(controller.findCurrentUser));
