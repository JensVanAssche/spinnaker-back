import { tableNames } from "../constants";
import { db } from "../lib/db";

const albumReturnValues = ["id", "title", "createdAt"];
const photoReturnValues = ["id", "album_id", "image", "createdAt"];

export async function getAlbums() {
  const query = db(tableNames.PHOTO_ALBUMS)
    .select(albumReturnValues)
    .orderBy("createdAt");

  const data = await query;
  return data;
}

export async function getAlbumName(id) {
  const query = db(tableNames.PHOTO_ALBUMS)
    .select("title")
    .where({ id })
    .first();

  const data = await query;
  return data;
}

export async function getAlbum(album_id) {
  const query = db(tableNames.PHOTOS)
    .select(photoReturnValues)
    .where({ album_id });

  const data = await query;
  return data;
}

export async function updateAlbum(id, body) {
  const query = db(tableNames.PHOTO_ALBUMS)
    .update(body, ["id"])
    .where({ id });

  const data = await query;
  return data;
}

export async function addAlbum(body) {
  const query = db(tableNames.PHOTO_ALBUMS).insert(body, ["id"]);

  const data = await query;
  return data;
}

export async function addPhoto(body) {
  const query = db(tableNames.PHOTOS).insert(body, ["id"]);

  const data = await query;
  return data;
}

export async function deleteAlbum(id) {
  const query = db(tableNames.PHOTO_ALBUMS)
    .del()
    .where({ id });

  const data = await query;
  return data;
}

export async function deletePhotos(album_id) {
  const query = db(tableNames.PHOTOS)
    .del()
    .where({ album_id });

  const data = await query;
  return data;
}

export async function deletePhoto(id) {
  const query = db(tableNames.PHOTOS)
    .del()
    .where({ id });

  const data = await query;
  return data;
}
