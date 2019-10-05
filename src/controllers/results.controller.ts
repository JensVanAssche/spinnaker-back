import * as resultsService from "../services/results.service";

export async function getByType(req, res) {
  const result = await resultsService.getByType(req.params.type);
  res.send(result);
}
