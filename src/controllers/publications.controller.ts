import * as publicationsService from "../services/publications.service";

export async function getAll(_req, res) {
  const result = await publicationsService.getAll();

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

  res.send(response);
}
