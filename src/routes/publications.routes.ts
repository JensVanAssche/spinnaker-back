import { Router } from "express";
import { handleAsyncFn } from "tree-house";
// import { publicationsSchema } from "../schemes/publications.schema";
import * as controller from "../controllers/publications.controller";

export const routes = Router({ mergeParams: true }).get(
  "/",
  handleAsyncFn((req, res) => controller.getAll(req, res))
);
