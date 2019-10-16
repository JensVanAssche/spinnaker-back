import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { playersSchema } from "../schemes/players.schema";
import * as controller from "../controllers/players.controller";

export const routes = Router({ mergeParams: true })
  .get(
    "/ordered/:type",
    validateSchema(playersSchema.getOrdered),
    handleAsyncFn((req, res) => controller.getOrdered(req, res))
  )
  .get(
    "/unordered/:type",
    validateSchema(playersSchema.getUnordered),
    handleAsyncFn((req, res) => controller.getUnordered(req, res))
  )
  .put("/:id", handleAsyncFn((req, res) => controller.updatePlayer(req, res)))
  .post("/", handleAsyncFn((req, res) => controller.addPlayer(req, res)))
  .delete(
    "/:id",
    handleAsyncFn((req, res) => controller.deletePlayer(req, res))
  );
