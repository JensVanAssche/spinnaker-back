import * as resultsRepository from "../repositories/results.repository";

export async function getByType(type) {
  if (type === "parantee" || type === "boccianederland") {
    try {
      return await resultsRepository.getPdfs(type);
    } catch (error) {
      throw error;
    }
  } else {
    try {
      const tournaments = await resultsRepository.getTournaments(type);

      for (let i = 0; i < tournaments.length; i++) {
        const scores = await resultsRepository.getScores(tournaments[i].id);

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
    await resultsRepository.updatePdf(id, body);
    return await this.getByType(body.type);
  } catch (error) {
    throw error;
  }
}

export async function addPdf(body) {
  try {
    await resultsRepository.addPdf(body);
    return await this.getByType(body.type);
  } catch (error) {
    throw error;
  }
}

export async function deletePdf(id) {
  try {
    return await resultsRepository.deletePdf(id);
  } catch (error) {
    throw error;
  }
}

export async function updateTournament(id, body) {
  try {
    await resultsRepository.updateTournament(id, body);
    return await this.getByType(body.type);
  } catch (error) {
    throw error;
  }
}

export async function addTournament(body) {
  try {
    await resultsRepository.addTournament(body);
    return await this.getByType(body.type);
  } catch (error) {
    throw error;
  }
}

export async function deleteTournament(id) {
  try {
    await resultsRepository.deleteTournament(id);
    await resultsRepository.deleteScoresByTournament(id);
    return;
  } catch (error) {
    throw error;
  }
}

export async function updateScore(id, body) {
  try {
    await resultsRepository.updateScore(id, body);
    const tournament = await resultsRepository.getTournament(body.tournamentId);
    return await this.getByType(tournament.type);
  } catch (error) {
    throw error;
  }
}

export async function addScore(body) {
  try {
    await resultsRepository.addScore(body);
    const tournament = await resultsRepository.getTournament(body.tournamentId);
    return await this.getByType(tournament.type);
  } catch (error) {
    throw error;
  }
}

export async function deleteScore(id) {
  try {
    return resultsRepository.deleteScore(id);
  } catch (error) {
    throw error;
  }
}
