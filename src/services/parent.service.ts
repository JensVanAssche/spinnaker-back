import * as parentRepository from "../repositories/parent.repository";

export async function create(values) {
  try {
    const user = await parentRepository.findByEmail(values.email);
    if (user) throw "Parent already exists";
    return await parentRepository.create(values);
  } catch (error) {
    throw error;
  }
}
