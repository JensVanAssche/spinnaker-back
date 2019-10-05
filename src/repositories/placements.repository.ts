import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = ["id", "type", "title", "pdf", "createdAt"];

export async function getByType(type) {
  const query = db(tableNames.PLACEMENTS)
    .select(defaultReturnValues)
    .where({ type })
    .orderBy("createdAt", "desc");

  const data = await query;
  return data;
}
