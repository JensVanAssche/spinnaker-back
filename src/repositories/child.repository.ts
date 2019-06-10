import * as bcrypt from "bcrypt";
import * as parentRepository from "../repositories/parent.repository";
import { tableNames } from "../constants";
import { db, execAndFind } from "../lib/db";

const defaultReturnValues = [
  "id",
  "firstName",
  "lastName",
  "parentId",
  "password",
  "resetPwToken",
  "createdAt",
  "updatedAt"
];

export async function create(values) {
  // Hash the password before inserting
  const hashedPw = await bcrypt.hash(values.password, 10);
  const valuesToInsert = Object.assign({}, values, { password: hashedPw });

  const query = db(tableNames.CHILDREN).insert(valuesToInsert, ["id"]);

  return await execAndFind(query, "id", findById);
}

export async function findById(id) {
  const query = db(tableNames.CHILDREN)
    .select(defaultReturnValues)
    .where({ id })
    .first();

  const data = await query;
  return data;
}

export async function findByParentId(parentId, firstName, lastName) {
  const query = db(tableNames.CHILDREN)
    .select(defaultReturnValues)
    .where({ parentId, firstName, lastName })
    .first();

  const data = await query;
  return data;
}

export async function findByEmail(firstName, lastName, email) {
  const parent = await parentRepository.findByEmail(email);
  const query = db(tableNames.CHILDREN)
    .select(defaultReturnValues)
    .where({ firstName, lastName, parentId: parent.id })
    .first();

  const data = await query;
  return data;
}

export async function getAll(parentId) {
  const query = db(tableNames.CHILDREN)
    .select(defaultReturnValues)
    .where({ parentId });

  const data = await query;
  return data;
}

export async function remove(id) {
  const query = db(tableNames.CHILDREN)
    .del()
    .where({ id });

  return { affectedRows: await query };
}
