import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = [
  "id",
  "type",
  "date",
  "title",
  "location",
  "createdAt"
];

export async function getByType(type) {
  const query = db(tableNames.CALENDAR)
    .select(defaultReturnValues)
    .where({ type })
    .orderBy("date");

  const data = await query;
  return data;
}
