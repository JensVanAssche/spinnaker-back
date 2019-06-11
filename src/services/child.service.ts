import * as childRepository from "../repositories/child.repository";
import * as configRepository from "../repositories/config.repository";

export async function create(values) {
  try {
    const user = await childRepository.findByParentId(
      values.parentId,
      values.firstName,
      values.lastName
    );
    if (user) throw "Child already exists";
    const result = await childRepository.create(values);
    await configRepository.create(result.id);
    return result;
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

export async function remove(id) {
  try {
    await configRepository.remove(id);
    const result = await childRepository.remove(id);
    if (result.affectedRows === 0) throw "child not found";
    return result;
  } catch (error) {
    throw error;
  }
}
