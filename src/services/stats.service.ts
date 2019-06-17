import * as statsRepository from "../repositories/stats.repository";

export async function getStats(childId) {
  try {
    return await statsRepository.getStats(childId);
  } catch (error) {
    throw error;
  }
}

export async function createStat(values) {
  try {
    return await statsRepository.createStat(values);
  } catch (error) {
    throw error;
  }
}
