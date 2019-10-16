import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = ["key", "value"];

export async function getAll() {
  const query = db(tableNames.CONTENT).select(defaultReturnValues);

  const data = await query;
  return data;
}

export async function findByKey(key) {
  const query = db(tableNames.CONTENT)
    .select(defaultReturnValues)
    .where({ key })
    .first();

  const data = await query;
  return data;
}

export async function updateContent(key, body) {
  const query = db(tableNames.CONTENT)
    .update(body, ["key", "value"])
    .where("key", key);

  const data = await query;
  return data;
}
