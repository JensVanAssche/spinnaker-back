import { Router } from "express";
import { handleAsyncFn } from "tree-house";
import * as controller from "../controllers/links.controller";

export const routes = Router({ mergeParams: true })
  .get("/", handleAsyncFn((req, res) => controller.getAll(req, res)))
  .get("/footer", handleAsyncFn((req, res) => controller.getFooter(req, res)))
  .put("/:id", handleAsyncFn((req, res) => controller.updateLink(req, res)))
  .post("/", handleAsyncFn((req, res) => controller.addLink(req, res)))
  .delete("/:id", handleAsyncFn((req, res) => controller.deleteLink(req, res)));
