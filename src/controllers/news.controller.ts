import * as newsService from "../services/news.service";

export async function getAll(req, res) {
  const result = await newsService.getAll(req.params.offset);
  res.send(result);
}

export async function getById(req, res) {
  const result = await newsService.getById(req.params.id);
  res.send(result);
}

export async function getLatest(_req, res) {
  const result = await newsService.getLatest();
  res.send(result);
}

export async function getCount(_req, res) {
  const result = await newsService.getCount();
  res.send(result);
}

export async function updateArticle(req, res) {
  const result = await newsService.updateArticle(req.params.id, req.body);
  res.send(result);
}

export async function addArticle(req, res) {
  const result = await newsService.addArticle(req.body);
  res.send(result);
}

export async function deleteArticle(req, res) {
  await newsService.deleteArticle(req.params.id);
  res.sendStatus(200);
}
