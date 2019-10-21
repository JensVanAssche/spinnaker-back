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

      return tournaments;
    } catch (error) {
      throw error;
    }
  }
}

export async function updatePdf(id, body) {
  try {
    await standingsRepository.updatePdf(id, body);
    return await this.getByType(body.type);
  } catch (error) {
    throw error;
  }
}

export async function addPdf(body) {
  try {
    await standingsRepository.addPdf(body);
    return await this.getByType(body.type);
  } catch (error) {
    throw error;
  }
}

export async function deletePdf(id) {
  try {
    return await standingsRepository.deletePdf(id);
  } catch (error) {
    throw error;
  }
}

export async function updateTournament(id, body) {
  try {
    await standingsRepository.updateTournament(id, body);
    return await this.getByType(body.type);
  } catch (error) {
    throw error;
  }
}

export async function addTournament(body) {
  try {
    await standingsRepository.addTournament(body);
    return await this.getByType(body.type);
  } catch (error) {
    throw error;
  }
}

export async function deleteTournament(id) {
  try {
    await standingsRepository.deleteTournament(id);
    await standingsRepository.deleteScoresByTournament(id);
    return;
  } catch (error) {
    throw error;
  }
}

export async function updateScore(id, body) {
  try {
    await standingsRepository.updateScore(id, body);
    const tournament = await standingsRepository.getTournament(
      body.tournamentId
    );
    return await this.getByType(tournament.type);
  } catch (error) {
    throw error;
  }
}

export async function addScore(body) {
  try {
    await standingsRepository.addScore(body);
    const tournament = await standingsRepository.getTournament(
      body.tournamentId
    );
    return await this.getByType(tournament.type);
  } catch (error) {
    throw error;
  }
}

export async function deleteScore(id) {
  try {
    return standingsRepository.deleteScore(id);
  } catch (error) {
    throw error;
  }
}
