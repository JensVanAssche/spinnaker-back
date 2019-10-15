import { tableNames } from "../constants";
import { db } from "../lib/db";

const albumReturnValues = ["id", "title", "createdAt"];
const photoReturnValues = ["id", "album_id", "image", "createdAt"];

export async function getAlbums() {
  const query = db(tableNames.PHOTO_ALBUMS).select(albumReturnValues);

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
