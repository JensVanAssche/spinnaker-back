import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = ["id", "title", "url", "createdAt"];

export async function getAll() {
  const query = db(tableNames.VIDEOS).select(defaultReturnValues);

  const data = await query;
  return data;
}
