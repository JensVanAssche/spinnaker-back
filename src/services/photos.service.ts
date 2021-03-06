import * as photosRepository from "../repositories/photos.repository";

export async function getAll(offset) {
  try {
    const result = await photosRepository.getAlbums(offset);

    for (let i = 0; i < result.length; i++) {
      const photos = await photosRepository.getAlbum(result[i].id);
      result[i]["photos"] = photos;
    }

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getAlbums(offset) {
  try {
    const result = await photosRepository.getAlbums(offset);

    for (let i = 0; i < result.length; i++) {
      const photos = await photosRepository.getAlbum(result[i].id);
      if (photos.length > 0) {
        const thumbnail = photos[0].image;
        result[i]["thumbnail"] = thumbnail;
      }
    }

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getCount() {
  try {
    const result = await photosRepository.getAll();
    return { length: result.length };
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

export async function updateAlbum(id, body) {
  try {
    await photosRepository.updateAlbum(id, body);
    return this.getAll();
  } catch (error) {
    throw error;
  }
}

export async function addAlbum(body) {
  try {
    await photosRepository.addAlbum(body);
    return this.getAll();
  } catch (error) {
    throw error;
  }
}

export async function addPhotos(body) {
  try {
    for (let i = 0; i < body.images.length; i++) {
      await photosRepository.addPhoto({
        albumId: body.albumId,
        image: body.images[i]
      });
    }
    return this.getAll();
  } catch (error) {
    throw error;
  }
}

export async function deleteAlbum(id) {
  try {
    await photosRepository.deleteAlbum(id);
    await photosRepository.deletePhotos(id);
    return this.getAll();
  } catch (error) {
    throw error;
  }
}

export async function deletePhoto(id) {
  try {
    await photosRepository.deletePhoto(id);
    return this.getAll();
  } catch (error) {
    throw error;
  }
}
