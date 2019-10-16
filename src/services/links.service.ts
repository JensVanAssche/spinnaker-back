import * as linksRepository from "../repositories/links.repository";

export async function getAll() {
  try {
    return await linksRepository.getAll();
  } catch (error) {
    throw error;
  }
}

export async function getFooter() {
  try {
    const response = {};
    response["steun"] = await linksRepository.getByFooter("steun");
    response["aangesloten"] = await linksRepository.getByFooter("aangesloten");
    response["onderdeel"] = await linksRepository.getByFooter("onderdeel");
    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateLink(id, body) {
  try {
    return await linksRepository.updateLink(id, body);
  } catch (error) {
    throw error;
  }
}

export async function addLink(body) {
  try {
    return await linksRepository.addLink(body);
  } catch (error) {
    throw error;
  }
}
