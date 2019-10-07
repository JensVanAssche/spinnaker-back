import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = ["id", "key", "value", "createdAt"];

export async function getByKey(key) {
  const query = db(tableNames.HISTORY)
    .select(defaultReturnValues)
    .where({ key })
    .first();

  const data = await query;
  return data;
}
