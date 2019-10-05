import * as playersService from "../services/players.service";

export async function getByType(req, res) {
  const result = await playersService.getByType(req.params.type);
  result.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
  res.send(result);
}
