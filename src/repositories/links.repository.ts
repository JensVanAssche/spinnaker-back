import { tableNames } from "../constants";
import { db, execAndFind } from "../lib/db";

const defaultReturnValues = ["id", "url", "image", "footer"];

export async function getAll() {
  const query = db(tableNames.LINKS)
    .select(defaultReturnValues)
    .orderBy("createdAt");

  const data = await query;
  return data;
}

export async function getLink(id) {
  const query = db(tableNames.LINKS)
    .select(defaultReturnValues)
    .where({ id });

  return query;
}

export async function getByFooter(footer) {
  const query = db(tableNames.LINKS)
    .select(defaultReturnValues)
    .where({ footer });

  const data = await query;
  return data;
}

export async function updateLink(id, body) {
  const query = db(tableNames.LINKS)
    .update(body, ["id"])
    .where({ id });

  return execAndFind(query, "id", getLink);
}

export async function addLink(body) {
  const query = db(tableNames.LINKS).insert(body, ["id"]);

  return execAndFind(query, "id", getLink);
}
