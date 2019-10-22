import { tableNames } from "../constants";
import { db, execAndFind } from "../lib/db";

const defaultReturnValues = ["id", "title", "url", "createdAt"];

export async function getAll() {
  const query = db(tableNames.VIDEOS)
    .select(defaultReturnValues)
    .orderBy("createdAt", "desc");

  const data = await query;
  return data;
}

export async function getVideo(id) {
  const query = db(tableNames.VIDEOS)
    .select(defaultReturnValues)
    .where({ id })
    .first();

  const data = await query;
  return data;
}

export async function updateVideo(id, body) {
  const query = db(tableNames.VIDEOS)
    .update(body, ["id"])
    .where({ id });

  return execAndFind(query, "id", getVideo);
}

export async function addVideo(body) {
  const query = db(tableNames.VIDEOS).insert(body, ["id"]);

  return execAndFind(query, "id", getVideo);
}

export async function deleteVideo(id) {
  const query = db(tableNames.VIDEOS)
    .del()
    .where({ id });

  const data = await query;
  return data;
}
