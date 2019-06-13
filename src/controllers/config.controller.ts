import * as configService from "../services/config.service";

export async function getAll(req, res) {
  const result = await configService.getAll(req.params.childId);
  res.send(result);
}

export async function updateConfig(req, res) {
  const result = await configService.updateConfig(req.body);
  res.send(result);
}

export async function getParameter(req, res) {
  const result = await configService.getParameter(
    req.params.childId,
    req.params.gameCodeName
  );
  res.send(result);
}
