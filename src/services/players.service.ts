import * as playersRepository from "../repositories/players.repository";

export async function getByType(type) {
  try {
    return await playersRepository.getByType(type);
  } catch (error) {
    throw error;
  }
}

export async function updatePlayer(id, body) {
  try {
    return await playersRepository.updatePlayer(id, body);
  } catch (error) {
    throw error;
  }
}

export async function addPlayer(body) {
  try {
    return await playersRepository.addPlayer(body);
  } catch (error) {
    throw error;
  }
}

export async function deletePlayer(id) {
  try {
    return await playersRepository.deletePlayer(id);
  } catch (error) {
    throw error;
  }
}
