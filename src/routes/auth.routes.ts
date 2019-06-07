import { Router } from "express";
import * as controller from "../controllers/auth.controller";

export const routes = Router({ mergeParams: true }).get("/", controller.get);
