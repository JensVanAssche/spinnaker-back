import * as gameRepository from "../repositories/game.repository";
import * as configRepository from "../repositories/config.repository";

export async function getAll() {
  try {
    return await gameRepository.getAll();
  } catch (error) {
    throw error;
  }
}

export async function findByChildId(childId) {
  try {
    return await await configRepository.getEnabled(childId);
  } catch (error) {
    throw error;
  }
}
