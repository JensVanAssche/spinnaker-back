import * as gameService from "../services/game.service";

export async function getAll(_req, res) {
  const result = await gameService.getAll();
  res.send(result);
}

export async function findByChildId(req, res) {
  const result = await gameService.findByChildId(req.params.childId);
  res.send(result);
}
