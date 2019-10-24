import * as photosService from "../services/photos.service";

export async function getAll(req, res) {
  const result = await photosService.getAll(req.params.offset);
  res.send(result);
}

export async function getAlbums(req, res) {
  const result = await photosService.getAlbums(req.params.offset);
  res.send(result);
}

export async function getCount(_req, res) {
  const result = await photosService.getCount();
  res.send(result);
}

export async function getAlbum(req, res) {
  const result = await photosService.getAlbum(req.params.id);
  res.send(result);
}

export async function updateAlbum(req, res) {
  const result = await photosService.updateAlbum(req.params.id, req.body);
  res.send(result);
}

export async function addAlbum(req, res) {
  const result = await photosService.addAlbum(req.body);
  res.send(result);
}

export async function addPhoto(req, res) {
  const result = await photosService.addPhoto(req.body);
  res.send(result);
}

export async function deleteAlbum(req, res) {
  const result = await photosService.deleteAlbum(req.params.id);
  res.send(result);
}

export async function deletePhoto(req, res) {
  const result = await photosService.deletePhoto(req.params.id);
  res.send(result);
}
