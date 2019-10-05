import * as playersRepository from "../repositories/players.repository";

export async function getByType(type) {
  try {
    return await playersRepository.getByType(type);
  } catch (error) {
    throw error;
  }
}
