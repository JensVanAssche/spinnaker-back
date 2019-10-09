import * as authService from "../services/auth.service";

export async function login(req, res) {
  const data = await authService.login(req.body);

  // Set current session data
  req.session.user = 200;

  res.send(data);
}

export async function findCurrentUser(req, res) {
  if (req.session.user) {
    res.send({
      status: 200
    });
  } else {
    throw "not logged in";
  }
}

export async function logout(req, res) {
  await authService.logout(req);

  res.send({
    status: 200
  });
}
