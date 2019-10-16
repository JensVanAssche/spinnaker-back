import { Router } from "express";
import { handleAsyncFn, validateSchema } from "tree-house";
import { calendarSchema } from "../schemes/calendar.schema";
import * as controller from "../controllers/calendar.controller";

export const routes = Router({ mergeParams: true })
  .get(
    "/:type",
    validateSchema(calendarSchema.getByType),
    handleAsyncFn((req, res) => controller.getByType(req, res))
  )
  .put("/:id", handleAsyncFn((req, res) => controller.updateCalendar(req, res)))
  .post("/", handleAsyncFn((req, res) => controller.addCalendar(req, res)))
  .delete(
    "/:id",
    handleAsyncFn((req, res) => controller.deleteCalendar(req, res))
  );
