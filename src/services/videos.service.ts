import * as videosRepository from "../repositories/videos.repository";

export async function getAll() {
  try {
    return await videosRepository.getAll();
  } catch (error) {
    throw error;
  }
}
