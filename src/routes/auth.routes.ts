import { Router } from "express";
import { handleAsyncFn } from "tree-house";
import * as controller from "../controllers/auth.controller";

export const routes = Router({ mergeParams: true })
  .post(
    "/login",
    handleAsyncFn(controller.login)
  )
  .post("/logout", handleAsyncFn(controller.logout))
  .get("/me", handleAsyncFn(controller.findCurrentUser));
