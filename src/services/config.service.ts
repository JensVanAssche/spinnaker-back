import * as configRepository from "../repositories/config.repository";

export async function getAll(childId) {
  try {
    return await configRepository.getAll(childId);
  } catch (error) {
    throw error;
  }
}

export async function updateConfig(values) {
  try {
    return await configRepository.updateConfig(values);
  } catch (error) {
    throw error;
  }
}

export async function getParameter(childId, gameCodeName) {
  try {
    return await configRepository.getParameter(childId, gameCodeName);
  } catch (error) {
    throw error;
  }
}
