import { Router } from "express";
// import { routes as authRoutes } from "./auth.routes";
import { routes as contentRoutes } from "./content.routes";

export const routes = Router({ mergeParams: true })
  // .use("/auth", authRoutes)
  .use("/content", contentRoutes);
