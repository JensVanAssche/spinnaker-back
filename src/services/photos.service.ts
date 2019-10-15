import * as photosRepository from "../repositories/photos.repository";

export async function getAll() {
  try {
    const result = await photosRepository.getAlbums();

    for (let i = 0; i < result.length; i++) {
      const photos = await photosRepository.getAlbum(result[i].id);
      result[i]["photos"] = photos;
    }

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getAlbums() {
  try {
    const result = await photosRepository.getAlbums();

    for (let i = 0; i < result.length; i++) {
      const photos = await photosRepository.getAlbum(result[i].id);
      const thumbnail = photos[0].image;
      result[i]["thumbnail"] = thumbnail;
    }

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getAlbum(id) {
  try {
    const response = {};
    response["content"] = await photosRepository.getAlbum(id);
    const title = await photosRepository.getAlbumName(id);
    response["title"] = title.title;

    return response;
  } catch (error) {
    throw error;
  }
}
