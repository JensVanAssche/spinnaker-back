import * as childService from "../services/child.service";

export async function create(req, res) {
  const result = await childService.create(req.body);
  res.send(result);
}

export async function getAll(req, res) {
  const result = await childService.getAll(req.params.parentId);
  res.send(result);
}

export async function remove(req, res) {
  await childService.remove(req.params.id);

  res.send({
    status: 200
  });
}
