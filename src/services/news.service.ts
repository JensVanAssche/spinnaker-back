import * as newsRepository from "../repositories/news.repository";

export async function getAll() {
  try {
    return await newsRepository.getAll();
  } catch (error) {
    throw error;
  }
}

export async function getById(id) {
  try {
    return await newsRepository.findById(id);
  } catch (error) {
    throw error;
  }
}
