import * as publicationsService from "../services/publications.service";

export async function getAll(_req, res) {
  const result = await publicationsService.getAll();
  res.send(result);
}

export async function updatePublication(req, res) {
  const result = await publicationsService.updatePublication(req.params.id, {
    type: req.body.text[2],
    title: req.body.text[0],
    pdf: req.body.text[1]
  });

  res.send(result);
}

export async function addPublication(req, res) {
  const result = await publicationsService.addPublication({
    type: req.body.text[2],
    title: req.body.text[0],
    pdf: req.body.text[1]
  });

  res.send(result);
}

export async function deletePublication(req, res) {
  const result = await publicationsService.deletePublication(req.params.id);
  res.send(result);
}
