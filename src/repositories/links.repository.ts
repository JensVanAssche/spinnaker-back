import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = ["id", "url", "image", "footer"];

export async function getAll() {
  const query = db(tableNames.LINKS).select(defaultReturnValues);

  const data = await query;
  return data;
}

export async function getByFooter(footer) {
  const query = db(tableNames.LINKS)
    .select(defaultReturnValues)
    .where({ footer });

  const data = await query;
  return data;
}
