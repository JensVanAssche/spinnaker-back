import { Router } from "express";
import { routes as authRoutes } from "./auth.routes";
import { routes as parentRoutes } from "./parent.routes";
import { routes as childRoutes } from "./child.routes";

export const routes = Router({ mergeParams: true })
  .use("/auth", authRoutes)
  .use("/parents", parentRoutes)
  .use("/children", childRoutes);
