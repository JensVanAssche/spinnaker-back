import * as statsService from "../services/stats.service";

export async function getStats(req, res) {
  const result = await statsService.getStats(req.params.childId);
  res.send(result);
}

export async function createStat(req, res) {
  const result = await statsService.createStat(req.body);
  res.send(result);
}
