import { tableNames } from "../constants";
import { db } from "../lib/db";

const defaultReturnValues = [
  "id",
  "name",
  "password",
  "createdAt",
  "updatedAt"
];

export async function getAdmin() {
  const query = db(tableNames.USERS)
    .select(defaultReturnValues)
    .first();

  const data = await query;
  return data;
}
