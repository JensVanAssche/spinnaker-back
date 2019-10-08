import * as photosService from "../services/photos.service";

export async function getAll(_req, res) {
  const result = await photosService.getAll();
  res.send(result);
}

export async function getAlbum(req, res) {
  const result = await photosService.getAlbum(req.params.id);
  res.send(result);
}
