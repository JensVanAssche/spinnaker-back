import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { calendarSchema } from "../schemes/calendar.schema";
import * as controller from "../controllers/calendar.controller";

export const routes = Router({ mergeParams: true }).get(
  "/:type",
  validateSchema(calendarSchema.getByType),
  handleAsyncFn((req, res) => controller.getByType(req, res))
);
