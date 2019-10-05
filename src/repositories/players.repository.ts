import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = ["id", "type", "name", "image", "createdAt"];

export async function getByType(type) {
  const query = db(tableNames.PLAYERS)
    .select(defaultReturnValues)
    .where({ type });

  const data = await query;
  return data;
}
