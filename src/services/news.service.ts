import * as newsRepository from "../repositories/news.repository";

export async function getAll(offset) {
  try {
    const result = await newsRepository.getByOffset(offset);

    var monthNames = [
      "januari",
      "februari",
      "maart",
      "april",
      "mei",
      "juni",
      "juli",
      "augustus",
      "september",
      "oktober",
      "november",
      "december"
    ];

    for (let i = 0; i < result.length; i++) {
      let date = new Date(result[i].createdAt);
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      result[i]["date"] = day + " " + monthNames[monthIndex] + " " + year;
    }

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getById(id) {
  try {
    const result = await newsRepository.findById(id);

    var monthNames = [
      "januari",
      "februari",
      "maart",
      "april",
      "mei",
      "juni",
      "juli",
      "augustus",
      "september",
      "oktober",
      "november",
      "december"
    ];

    let date = new Date(result.createdAt);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    result["date"] = day + " " + monthNames[monthIndex] + " " + year;

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getLatest() {
  try {
    const result = await newsRepository.getLatest();
    var monthNames = [
      "januari",
      "februari",
      "maart",
      "april",
      "mei",
      "juni",
      "juli",
      "augustus",
      "september",
      "oktober",
      "november",
      "december"
    ];

    for (let i = 0; i < result.length; i++) {
      let date = new Date(result[i].createdAt);
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      result[i]["date"] = day + " " + monthNames[monthIndex] + " " + year;
    }

    return result;
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
    const result = await newsRepository.updateArticle(id, body);
    var monthNames = [
      "januari",
      "februari",
      "maart",
      "april",
      "mei",
      "juni",
      "juli",
      "augustus",
      "september",
      "oktober",
      "november",
      "december"
    ];

    let date = new Date(result.createdAt);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    result["date"] = day + " " + monthNames[monthIndex] + " " + year;
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addArticle(body) {
  try {
    const result = await newsRepository.addArticle(body);
    var monthNames = [
      "januari",
      "februari",
      "maart",
      "april",
      "mei",
      "juni",
      "juli",
      "augustus",
      "september",
      "oktober",
      "november",
      "december"
    ];

    let date = new Date(result.createdAt);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    result["date"] = day + " " + monthNames[monthIndex] + " " + year;
    return result;
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
