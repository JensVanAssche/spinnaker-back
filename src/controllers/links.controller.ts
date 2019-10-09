import * as linksService from "../services/links.service";

export async function getAll(_req, res) {
  const result = await linksService.getAll();
  res.send(result);
}

export async function getFooter(_req, res) {
  const result = await linksService.getFooter();
  res.send(result);
}
