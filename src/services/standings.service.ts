import * as standingsRepository from "../repositories/standings.repository";

export async function getByType(type) {
  try {
    return await standingsRepository.getByType(type);
  } catch (error) {
    throw error;
  }
}
