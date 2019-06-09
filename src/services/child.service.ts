import * as childRepository from "../repositories/child.repository";

export async function create(values) {
  try {
    const user = await childRepository.findByParentId(
      values.parentId,
      values.firstName,
      values.lastName
    );
    if (user) throw "Child already exists";
    return await childRepository.create(values);
  } catch (error) {
    throw error;
  }
}

export async function getAll(parentId) {
  try {
    return await childRepository.getAll(parentId);
  } catch (error) {
    throw error;
  }
}
