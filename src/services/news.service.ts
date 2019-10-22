import * as newsRepository from "../repositories/news.repository";

export async function getAll(offset) {
  try {
    return await newsRepository.getByOffset(offset);
  } catch (error) {
    throw error;
  }
}

export async function getById(id) {
  try {
    return await newsRepository.findById(id);
  } catch (error) {
    throw error;
  }
}

export async function getLatest() {
  try {
    return await newsRepository.getLatest();
  } catch (error) {
    throw error;
  }
}

export async function getCount() {
  try {
    const result = await newsRepository.getAll();
    return { length: result.length };
  } catch (error) {
    throw error;
  }
}

export async function updateArticle(id, body) {
  try {
    return await newsRepository.updateArticle(id, body);
  } catch (error) {
    throw error;
  }
}

export async function addArticle(body) {
  try {
    return await newsRepository.addArticle(body);
  } catch (error) {
    throw error;
  }
}

export async function deleteArticle(id) {
  try {
    return await newsRepository.deleteArticle(id);
  } catch (error) {
    throw error;
  }
}
