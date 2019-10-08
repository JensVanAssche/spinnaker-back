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
