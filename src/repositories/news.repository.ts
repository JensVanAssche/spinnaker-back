import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = ["id", "title", "body", "image", "createdAt"];

export async function getAll() {
  const query = db(tableNames.NEWS).select(defaultReturnValues);

  const data = await query;
  return data;
}

export async function findById(id) {
  const query = db(tableNames.NEWS)
    .select(defaultReturnValues)
    .where({ id })
    .first();

  const data = await query;
  return data;
}
