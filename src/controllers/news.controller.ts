import * as newsService from "../services/news.service";

export async function getAll(req, res) {
  const result = await newsService.getAll(req.params.offset);

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

  for (let i = 0; i < result.length; i++) {
    let date = new Date(result[i].createdAt);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    result[i]["date"] = day + " " + monthNames[monthIndex] + " " + year;
  }

  res.send(result);
}

export async function getById(req, res) {
  const result = await newsService.getById(req.params.id);

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

  let date = new Date(result.createdAt);
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  result["date"] = day + " " + monthNames[monthIndex] + " " + year;
  res.send(result);
}

export async function getLatest(_req, res) {
  const result = await newsService.getLatest();

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

  for (let i = 0; i < result.length; i++) {
    let date = new Date(result[i].createdAt);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    result[i]["date"] = day + " " + monthNames[monthIndex] + " " + year;
  }

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
