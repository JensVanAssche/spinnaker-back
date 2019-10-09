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
