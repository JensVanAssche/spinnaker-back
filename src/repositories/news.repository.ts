import { tableNames } from "../constants";
import { db, execAndFind } from "../lib/db";

const defaultReturnValues = ["id", "title", "body", "image", "createdAt"];

export async function getAll() {
  const query = db(tableNames.NEWS).select(defaultReturnValues);

  const data = await query;
  return data;
}

export async function getByOffset(offset) {
  const query = db(tableNames.NEWS)
    .select(defaultReturnValues)
    .orderBy("createdAt", "desc")
    .limit(10)
    .offset(parseInt(offset));

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

export async function updateArticle(id, body) {
  const query = db(tableNames.NEWS)
    .update(body, ["id"])
    .where({ id });

  return execAndFind(query, "id", findById);
}

export async function addArticle(body) {
  const query = db(tableNames.NEWS).insert(body, ["id"]);

  return execAndFind(query, "id", findById);
}

export async function deleteArticle(id) {
  const query = db(tableNames.NEWS)
    .del()
    .where({ id });

  const data = await query;
  return data;
}
