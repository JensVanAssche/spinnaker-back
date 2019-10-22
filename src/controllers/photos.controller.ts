import * as photosService from "../services/photos.service";

export async function getAll(_req, res) {
  const result = await photosService.getAll();
  res.send(result);
}

export async function getAlbums(_req, res) {
  const result = await photosService.getAlbums();
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
