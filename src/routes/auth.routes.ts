// import { Router } from "express";
// import { handleAsyncFn, validateSchema } from "tree-house";
// import { authSchema } from "../schemes/auth.schema";
// import * as controller from "../controllers/auth.controller";

// export const routes = Router({ mergeParams: true })
//   .post(
//     "/login-parent",
//     validateSchema(authSchema.loginParent),
//     handleAsyncFn(controller.loginParent)
//   )
//   .post(
//     "/login-child",
//     validateSchema(authSchema.loginChild),
//     handleAsyncFn(controller.loginChild)
//   )
//   .post("/logout", handleAsyncFn(controller.logout))
//   .get("/me", handleAsyncFn(controller.findCurrentUser));
