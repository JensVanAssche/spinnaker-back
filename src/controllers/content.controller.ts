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

export async function updateContent(req, res) {
  const result = await contentService.updateContent(req.params.key, req.body);
  res.send(result[0]);
}

export async function updateImage(req, res) {
  const result = await contentService.updateContent(req.params.key, {
    value: req.file.originalname
  });

  res.send(result[0]);
}

export async function updatePdf(req, res) {
  const result1 = await contentService.updateContent(
    "spinnakerEngagementTitle",
    {
      value: req.body.text[0]
    }
  );

  const result2 = await contentService.updateContent("spinnakerEngagementPdf", {
    value: req.body.text[1]
  });

  result1.push(result2[0]);

  res.send(result1);
}
