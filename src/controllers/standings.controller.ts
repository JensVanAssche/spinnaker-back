import * as standingsService from "../services/standings.service";

export async function getByType(req, res) {
  const result = await standingsService.getByType(req.params.type);
  res.send(result);
}

export async function updatePdf(req, res) {
  const result = await standingsService.updatePdf(req.params.id, {
    type: req.body.text[2],
    title: req.body.text[0],
    pdf: req.body.text[1]
  });
  res.send(result);
}

export async function addPdf(req, res) {
  const result = await standingsService.addPdf({
    type: req.body.text[2],
    title: req.body.text[0],
    pdf: req.body.text[1]
  });
  res.send(result);
}

export async function deletePdf(req, res) {
  await standingsService.deletePdf(req.params.id);
  res.sendStatus(200);
}

export async function updateTournament(req, res) {
  const result = await standingsService.updateTournament(
    req.params.id,
    req.body
  );
  res.send(result);
}

export async function addTournament(req, res) {
  const result = await standingsService.addTournament(req.body);
  res.send(result);
}

export async function deleteTournament(req, res) {
  await standingsService.deleteTournament(req.params.id);
  res.sendStatus(200);
}

export async function updateScore(req, res) {
  const result = await standingsService.updateScore(req.params.id, req.body);
  res.send(result);
}

export async function addScore(req, res) {
  const result = await standingsService.addScore(req.body);
  res.send(result);
}

export async function deleteScore(req, res) {
  await standingsService.deleteScore(req.params.id);
  res.sendStatus(200);
}
