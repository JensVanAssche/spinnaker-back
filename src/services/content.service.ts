import * as contentRepository from "../repositories/content.repository";

export async function getAll() {
  try {
    return await contentRepository.getAll();
  } catch (error) {
    throw error;
  }
}

export async function getByKey(key) {
  try {
    return await contentRepository.findByKey(key);
  } catch (error) {
    throw error;
  }
}
