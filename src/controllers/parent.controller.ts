import * as parentService from "../services/parent.service";

export async function create(req, res) {
  const result = await parentService.create(req.body);
  res.send({
    status: 200,
    payload: result
  });
}
