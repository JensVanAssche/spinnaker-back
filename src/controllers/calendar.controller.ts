import * as calendarService from "../services/calendar.service";

export async function getByType(req, res) {
  const result = await calendarService.getByType(req.params.type);

  if (req.params.type === "boccia") {
    result.sort((a, b) =>
      a.date.toLowerCase() > b.date.toLowerCase() ? 1 : -1
    );
  }

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
    let date = new Date(result[i].date);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    result[i]["date"] = day + " " + monthNames[monthIndex] + " " + year;
  }

  res.send(result);
}

export async function updateCalendar(req, res) {
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
    location: req.body.location
  };

  const result = await calendarService.updateCalendar(req.params.id, body);

  let date = new Date(result.date);
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  result["date"] = day + " " + monthNames[monthIndex] + " " + year;

  res.send(result);
}

export async function addCalendar(req, res) {
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
    type: req.body.type,
    date: req.body.year + "-" + monthh + "-" + req.body.day,
    title: req.body.title,
    location: req.body.location
  };

  const result = await calendarService.addCalendar(body);

  let date = new Date(result.date);
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  result["date"] = day + " " + monthNames[monthIndex] + " " + year;

  res.send(result);
}

export async function deleteCalendar(req, res) {
  await calendarService.deleteCalendar(req.params.id);
  res.sendStatus(200);
}
