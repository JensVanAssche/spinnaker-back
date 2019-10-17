import * as standingsService from "../services/standings.service";

export async function getByType(req, res) {
  const result = await standingsService.getByType(req.params.type);
  res.send(result);
}

export async function updatePdf(req, res) {
  const result = await standingsService.updatePdf(req.params.id, {
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
