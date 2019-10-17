import * as calendarRepository from "../repositories/calendar.repository";

export async function getByType(type) {
  var calendar;
  if (type === "boccia") {
    try {
      const parantee = await calendarRepository.getByType("parantee");
      const scholen = await calendarRepository.getByType("scholen");
      const nederland = await calendarRepository.getByType("nederland");
      calendar = parantee.concat(scholen).concat(nederland);
    } catch (error) {
      throw error;
    }
  } else {
    try {
      calendar = await calendarRepository.getByType(type);
    } catch (error) {
      throw error;
    }
  }

  calendar.sort((a, b) =>
    a.date.toLowerCase() > b.date.toLowerCase() ? 1 : -1
  );

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

  for (let i = 0; i < calendar.length; i++) {
    let date = new Date(calendar[i].date);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    calendar[i]["date"] = day + " " + monthNames[monthIndex] + " " + year;
  }

  return calendar;
}

export async function updateCalendar(id, body) {
  try {
    await calendarRepository.updateCalendar(id, body);
    return this.getByType(body.type);
  } catch (error) {
    throw error;
  }
}

export async function addCalendar(body) {
  try {
    await calendarRepository.addCalendar(body);
    return this.getByType(body.type);
  } catch (error) {
    throw error;
  }
}

export async function deleteCalendar(id) {
  try {
    return await calendarRepository.deleteCalendar(id);
  } catch (error) {
    throw error;
  }
}
