import { tableNames } from "../constants";
import { db, execAndFind } from "../lib/db";

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

export async function getCalendar(id) {
  const query = db(tableNames.CALENDAR)
    .select(defaultReturnValues)
    .where({ id })
    .first();

  return query;
}

export async function updateCalendar(id, body) {
  const query = db(tableNames.CALENDAR)
    .update(body, ["id"])
    .where({ id });

  return execAndFind(query, "id", getCalendar);
}

export async function addCalendar(body) {
  const query = db(tableNames.CALENDAR).insert(body, ["id"]);

  return execAndFind(query, "id", getCalendar);
}

export async function deleteCalendar(id) {
  const query = db(tableNames.CALENDAR)
    .del()
    .where({ id });

  const data = await query;
  return data;
}
