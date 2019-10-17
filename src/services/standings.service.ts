import * as standingsRepository from "../repositories/standings.repository";

export async function getByType(type) {
  if (type === "parantee" || type === "boccianederland") {
    try {
      return await standingsRepository.getPdfs(type);
    } catch (error) {
      throw error;
    }
  } else {
    try {
      const tournaments = await standingsRepository.getTournaments(type);

      for (let i = 0; i < tournaments.length; i++) {
        const scores = await standingsRepository.getScores(tournaments[i].id);

        tournaments[i]["scores"] = [];

        scores.forEach(score => {
          tournaments[i]["scores"].push(score);
        });
      }

      tournaments.sort((a, b) =>
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

      for (let i = 0; i < tournaments.length; i++) {
        let date = new Date(tournaments[i].date);
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        tournaments[i]["date"] =
          day + " " + monthNames[monthIndex] + " " + year;
      }

      return tournaments;
    } catch (error) {
      throw error;
    }
  }
}

export async function updatePdf(id, body) {
  try {
    return await standingsRepository.updatePdf(id, body);
  } catch (error) {
    throw error;
  }
}

export async function addPdf(body) {
  try {
    return await standingsRepository.addPdf(body);
  } catch (error) {
    throw error;
  }
}

export async function deletePdf(body) {
  try {
    return await standingsRepository.deletePdf(body);
  } catch (error) {
    throw error;
  }
}
