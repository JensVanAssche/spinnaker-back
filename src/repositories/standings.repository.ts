import { tableNames } from "../constants";
import { db, execAndFind } from "../lib/db";

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

export async function getPdf(id) {
  const query = db(tableNames.STANDINGS_PDF)
    .select(pdfReturnValues)
    .where({ id })
    .first();

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

export async function updatePdf(id, body) {
  const query = db(tableNames.STANDINGS_PDF)
    .update(body, ["id"])
    .where({ id });

  return execAndFind(query, "id", getPdf);
}

export async function addPdf(body) {
  const query = db(tableNames.STANDINGS_PDF).insert(body, ["id"]);

  return execAndFind(query, "id", getPdf);
}

export async function deletePdf(id) {
  const query = db(tableNames.STANDINGS_PDF)
    .del()
    .where({ id });

  const data = await query;
  return data;
}
