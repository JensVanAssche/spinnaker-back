import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = [
  "id",
  "gameCodeName",
  "gameDisplayName",
  "imageName",
  "parameterName",
  "createdAt",
  "updatedAt"
];

export async function getAll() {
  const query = db(tableNames.GAMES).select(defaultReturnValues);

  const data = await query;
  return data;
}
