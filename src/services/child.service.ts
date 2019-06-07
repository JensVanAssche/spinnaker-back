import * as childRepository from "../repositories/child.repository";

export async function create(values) {
  try {
    return await childRepository.create(values);
  } catch (error) {
    throw error;
  }
}
