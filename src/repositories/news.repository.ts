import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = ["id", "title", "body", "image", "createdAt"];

export async function getAll(offset) {
  const query = db(tableNames.NEWS)
    .select(defaultReturnValues)
    .orderBy("createdAt", "desc")
    .limit(10)
    .offset(offset);

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

export async function getLatest() {
  const query = db(tableNames.NEWS)
    .select(defaultReturnValues)
    .orderBy("createdAt", "desc")
    .limit(3);

  const data = await query;
  return data;
}
