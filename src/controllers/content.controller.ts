import * as contentService from "../services/content.service";

export async function getAll(_req, res) {
  const result = await contentService.getAll();
  var myObject = {};

  for (let i = 0; i < result.length; i++) {
    myObject[result[i].key] = result[i].value;
  }

  res.send(myObject);
}

export async function getByKey(req, res) {
  const result = await contentService.getByKey(req.params.key);
  res.send(result);
}
