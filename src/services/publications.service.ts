import * as publicationsRepository from "../repositories/publications.repository";

export async function getAll() {
  try {
    return await publicationsRepository.getAll();
  } catch (error) {
    throw error;
  }
}
