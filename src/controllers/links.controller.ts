import * as linksService from "../services/links.service";

export async function getAll(_req, res) {
  const result = await linksService.getAll();
  res.send(result);
}

export async function getFooter(_req, res) {
  const result = await linksService.getFooter();
  res.send(result);
}

export async function updateLink(req, res) {
  const result = await linksService.updateLink(req.params.id, req.body);
  res.send(result);
}

export async function addLink(req, res) {
  const result = await linksService.addLink(req.body);
  res.send(result);
}
