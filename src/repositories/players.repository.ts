import { tableNames } from "../constants";
import { db, execAndFind } from "../lib/db";

const defaultReturnValues = [
  "id",
  "type",
  "name",
  "subtitle",
  "image",
  "createdAt"
];

export async function getByType(type) {
  const query = db(tableNames.PLAYERS)
    .select(defaultReturnValues)
    .where({ type });

  const data = await query;
  return data;
}

export async function getPlayer(id) {
  const query = db(tableNames.PLAYERS)
    .select(defaultReturnValues)
    .where({ id })
    .first();

  return query;
}

export async function updatePlayer(id, body) {
  const query = db(tableNames.PLAYERS)
    .update(body, ["id"])
    .where({ id });

  return execAndFind(query, "id", getPlayer);
}

export async function addPlayer(body) {
  const query = db(tableNames.PLAYERS).insert(body, ["id"]);

  return execAndFind(query, "id", getPlayer);
}

export async function deletePlayer(id) {
  const query = db(tableNames.PLAYERS)
    .del()
    .where({ id });

  const data = await query;
  return data;
}
