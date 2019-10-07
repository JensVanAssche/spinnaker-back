import * as historyRepository from "../repositories/history.repository";

export async function getByKey(key) {
  try {
    return await historyRepository.getByKey(key);
  } catch (error) {
    throw error;
  }
}
