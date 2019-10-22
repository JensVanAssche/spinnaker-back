import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = ["id", "type", "title", "pdf", "createdAt"];

export async function getAll() {
  const query = db(tableNames.PUBLICATIONS).select(defaultReturnValues);

  const data = await query;
  return data;
}

export async function updatePublication(id, body) {
  const query = db(tableNames.PUBLICATIONS)
    .update(body)
    .where({ id });

  const data = await query;
  return data;
}

export async function addPublication(body) {
  const query = db(tableNames.PUBLICATIONS).insert(body);

  const data = await query;
  return data;
}

export async function deletePublication(id) {
  const query = db(tableNames.PUBLICATIONS)
    .del()
    .where({ id });

  const data = await query;
  return data;
}
