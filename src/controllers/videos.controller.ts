import * as videosService from "../services/videos.service";

export async function getAll(_req, res) {
  const result = await videosService.getAll();
  res.send(result);
}

export async function getByOffset(req, res) {
  const result = await videosService.getByOffset(req.params.offset);
  res.send(result);
}

export async function getCount(_req, res) {
  const result = await videosService.getCount();
  res.send(result);
}

export async function updateVideo(req, res) {
  const result = await videosService.updateVideo(req.params.id, req.body);
  res.send(result);
}

export async function addVideo(req, res) {
  const result = await videosService.addVideo(req.body);
  res.send(result);
}

export async function deleteVideo(req, res) {
  await videosService.deleteVideo(req.params.id);
  res.sendStatus(200);
}
