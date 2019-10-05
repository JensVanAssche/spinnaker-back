import * as placementsService from "../services/placements.service";

export async function getByType(req, res) {
  const result = await placementsService.getByType(req.params.type);
  res.send(result);
}
