import * as publicationsRepository from "../repositories/publications.repository";

export async function getAll() {
  try {
    const result = await publicationsRepository.getAll();

    var kranten = [];
    var folders = [];

    result.forEach(element => {
      if (element.type === "krant") {
        kranten.push(element);
      }

      if (element.type === "folder") {
        folders.push(element);
      }
    });

    kranten.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    );
    folders.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    );

    var response = {};
    response["kranten"] = kranten;
    response["folders"] = folders;

    return response;
  } catch (error) {
    throw error;
  }
}

export async function updatePublication(id, body) {
  try {
    await publicationsRepository.updatePublication(id, body);
    return this.getAll();
  } catch (error) {
    throw error;
  }
}

export async function addPublication(body) {
  try {
    await publicationsRepository.addPublication(body);
    return this.getAll();
  } catch (error) {
    throw error;
  }
}

export async function deletePublication(id) {
  try {
    await publicationsRepository.deletePublication(id);
    return this.getAll();
  } catch (error) {
    throw error;
  }
}
