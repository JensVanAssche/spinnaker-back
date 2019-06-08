import * as authService from "../services/auth.service";

export async function loginParent(req, res) {
  const data = await authService.loginParent(req.body);

  // Set current session data
  req.session.userId = data;

  res.send({
    status: 200
  });
}

/**
 * Return logged in user's information
 */
export async function findCurrentUser(req, res) {
  if (req.session.userId) {
    const user = await authService.findCurrentUser(req.session.userId);

    res.send({
      status: 200,
      payload: user
    });
  } else {
    throw "error";
  }
}

export async function logout(req, res) {
  await authService.logout(req);

  res.send({
    status: 200
  });
}
