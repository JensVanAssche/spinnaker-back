import * as resultsService from "../services/results.service";

export async function getByType(req, res) {
  const result = await resultsService.getByType(req.params.type);
  res.send(result);
}

export async function updatePdf(req, res) {
  const result = await resultsService.updatePdf(req.params.id, {
    type: req.body.text[2],
    title: req.body.text[0],
    pdf: req.body.text[1]
  });
  res.send(result);
}

export async function addPdf(req, res) {
  const result = await resultsService.addPdf({
    type: req.body.text[2],
    title: req.body.text[0],
    pdf: req.body.text[1]
  });
  res.send(result);
}

export async function deletePdf(req, res) {
  await resultsService.deletePdf(req.params.id);
  res.sendStatus(200);
}

export async function updateTournament(req, res) {
  var monthNames = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december"
  ];

  var month = monthNames.indexOf(req.body.month) + 1;
  var monthh;

  if (month < 10) {
    monthh = "0" + month.toString();
  } else {
    monthh = month.toString();
  }

  const body = {
    date: req.body.year + "-" + monthh + "-" + req.body.day,
    title: req.body.title,
    type: req.body.type
  };

  const result = await resultsService.updateTournament(req.params.id, body);
  res.send(result);
}

export async function addTournament(req, res) {
  var monthNames = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december"
  ];

  var month = monthNames.indexOf(req.body.month) + 1;
  var monthh;

  if (month < 10) {
    monthh = "0" + month.toString();
  } else {
    monthh = month.toString();
  }

  const body = {
    date: req.body.year + "-" + monthh + "-" + req.body.day,
    title: req.body.title,
    type: req.body.type
  };

  const result = await resultsService.addTournament(body);
  res.send(result);
}

export async function deleteTournament(req, res) {
  await resultsService.deleteTournament(req.params.id);
  res.sendStatus(200);
}

export async function updateScore(req, res) {
  const result = await resultsService.updateScore(req.params.id, req.body);
  res.send(result);
}

export async function addScore(req, res) {
  const result = await resultsService.addScore(req.body);
  res.send(result);
}

export async function deleteScore(req, res) {
  await resultsService.deleteScore(req.params.id);
  res.sendStatus(200);
}
