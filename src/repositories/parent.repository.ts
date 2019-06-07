import * as bcrypt from "bcrypt";
import { tableNames } from "../constants";
import { db, execAndFind } from "../lib/db";

const defaultReturnValues = [
  "id",
  "firstName",
  "lastName",
  "email",
  "password",
  "resetPwToken",
  "createdAt",
  "updatedAt"
];

export async function create(values) {
  // Hash the password before inserting
  const hashedPw = await bcrypt.hash(values.password, 10);
  const valuesToInsert = Object.assign({}, values, { password: hashedPw });

  const query = db(tableNames.PARENTS).insert(valuesToInsert, ["id"]);

  return await execAndFind(query, "id", findById);
}

export async function findById(id) {
  const query = db(tableNames.PARENTS)
    .select(defaultReturnValues)
    .where({ id })
    .first();

  const data = await query;
  return data;
}

export async function findByEmail(email) {
  const query = db(tableNames.PARENTS)
    .select(defaultReturnValues)
    .where({ email })
    .first();

  const data = await query;
  return data;
}
