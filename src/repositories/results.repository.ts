import { tableNames } from "../constants";
import { db } from "../lib/db";

const pdfReturnValues = ["id", "type", "title", "pdf", "createdAt"];
const tournamentReturnValues = ["id", "type", "title", "date", "createdAt"];
const scoresReturnValues = [
  "id",
  "tournament_id",
  "team1",
  "team1_score",
  "team2",
  "team2_score",
  "createdAt"
];

export async function getPdfs(type) {
  const query = db(tableNames.RESULTS_PDF)
    .select(pdfReturnValues)
    .where({ type })
    .orderBy("createdAt", "desc");

  const data = await query;
  return data;
}

export async function getTournaments(type) {
  const query = db(tableNames.RESULTS_TOURNAMENTS)
    .select(tournamentReturnValues)
    .where({ type });

  const data = await query;
  return data;
}

export async function getScores(tournament_id) {
  const query = db(tableNames.RESULTS_SCORES)
    .select(scoresReturnValues)
    .where({ tournament_id });

  const data = await query;
  return data;
}
