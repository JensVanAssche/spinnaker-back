import * as historyService from "../services/history.service";

export async function getByKey(req, res) {
  const result = await historyService.getByKey(req.params.key);
  res.send(result);
}
