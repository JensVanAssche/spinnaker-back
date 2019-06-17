import { Router } from "express";
import { routes as authRoutes } from "./auth.routes";
import { routes as parentRoutes } from "./parent.routes";
import { routes as childRoutes } from "./child.routes";
import { routes as gameRoutes } from "./game.route";
import { routes as configRoutes } from "./config.route";
import { routes as statsRoutes } from "./stats.route";

export const routes = Router({ mergeParams: true })
  .use("/auth", authRoutes)
  .use("/parents", parentRoutes)
  .use("/children", childRoutes)
  .use("/games", gameRoutes)
  .use("/config", configRoutes)
  .use("/stats", statsRoutes);
