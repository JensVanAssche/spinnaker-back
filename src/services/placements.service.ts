import * as placementsRepository from "../repositories/placements.repository";

export async function getByType(type) {
  try {
    return await placementsRepository.getByType(type);
  } catch (error) {
    throw error;
  }
}
