import * as standingsService from "../services/standings.service";

export async function getByType(req, res) {
  const result = await standingsService.getByType(req.params.type);
  res.send(result);
}
