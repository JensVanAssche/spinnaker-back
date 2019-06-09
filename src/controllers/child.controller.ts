import * as childService from "../services/child.service";

export async function create(req, res) {
  const result = await childService.create(req.body);
  res.send({
    status: 200,
    payload: result
  });
}

export async function getAll(req, res) {
  const result = await childService.getAll(req.params.parentId);
  res.send({
    status: 200,
    payload: result
  });
}
