import * as videosService from "../services/videos.service";

export async function getAll(_req, res) {
  const result = await videosService.getAll();
  res.send(result);
}
