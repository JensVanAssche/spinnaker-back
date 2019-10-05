import * as resultsRepository from "../repositories/results.repository";

export async function getByType(type) {
  try {
    return await resultsRepository.getByType(type);
  } catch (error) {
    throw error;
  }
}
