import * as videosRepository from "../repositories/videos.repository";

export async function getAll() {
  try {
    return await videosRepository.getAll();
  } catch (error) {
    throw error;
  }
}

export async function updateVideo(id, body) {
  try {
    return await videosRepository.updateVideo(id, body);
  } catch (error) {
    throw error;
  }
}

export async function addVideo(body) {
  try {
    return await videosRepository.addVideo(body);
  } catch (error) {
    throw error;
  }
}

export async function deleteVideo(id) {
  try {
    return await videosRepository.deleteVideo(id);
  } catch (error) {
    throw error;
  }
}
