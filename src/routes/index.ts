import { Router } from "express";
// import { routes as authRoutes } from "./auth.routes";
import { routes as contentRoutes } from "./content.routes";
import { routes as newsRoutes } from "./news.routes";
import { routes as publicationsRoutes } from "./publications.routes";
import { routes as playersRoutes } from "./players.routes";
import { routes as resultsRoutes } from "./results.routes";
import { routes as placementsRoutes } from "./placements.routes";

export const routes = Router({ mergeParams: true })
  // .use("/auth", authRoutes)
  .use("/content", contentRoutes)
  .use("/news", newsRoutes)
  .use("/publications", publicationsRoutes)
  .use("/players", playersRoutes)
  .use("/results", resultsRoutes)
  .use("/placements", placementsRoutes);
