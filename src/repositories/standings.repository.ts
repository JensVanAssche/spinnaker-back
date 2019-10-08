import { tableNames } from "../constants";
import { db } from "../lib/db";

const pdfReturnValues = ["id", "type", "title", "pdf", "createdAt"];
const tournamentReturnValues = ["id", "type", "title", "subtitle", "createdAt"];
const scoresReturnValues = [
  "id",
  "tournament_id",
  "name",
  "points1",
  "points2",
  "points3",
  "createdAt"
];

export async function getPdfs(type) {
  const query = db(tableNames.STANDINGS_PDF)
    .select(pdfReturnValues)
    .where({ type })
    .orderBy("createdAt", "desc");

  const data = await query;
  return data;
}

export async function getTournaments(type) {
  const query = db(tableNames.STANDINGS_TOURNAMENTS)
    .select(tournamentReturnValues)
    .where({ type });

  const data = await query;
  return data;
}

export async function getScores(tournament_id) {
  const query = db(tableNames.STANDINGS_SCORES)
    .select(scoresReturnValues)
    .where({ tournament_id });

  const data = await query;
  return data;
}
