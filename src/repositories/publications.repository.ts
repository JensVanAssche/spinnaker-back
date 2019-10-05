import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = ["id", "type", "title", "pdf", "createdAt"];

export async function getAll() {
  const query = db(tableNames.PUBLICATIONS).select(defaultReturnValues);

  const data = await query;
  return data;
}
