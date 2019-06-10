import * as authService from "../services/auth.service";

export async function loginParent(req, res) {
  const data = await authService.loginParent(req.body);

  // Set current session data
  req.session.userId = data.id;
  req.session.type = "parent";

  res.send(data);
}

export async function loginChild(req, res) {
  const data = await authService.loginChild(req.body);

  // Set current session data
  req.session.userId = data.id;
  req.session.type = "child";

  res.send(data);
}

/**
 * Return logged in user's information
 */
export async function findCurrentUser(req, res) {
  if (req.session.userId) {
    let user;
    if (req.session.type === "parent") {
      user = await authService.findCurrentParent(req.session.userId);
      user["type"] = "parent";
    }

    if (req.session.type === "child") {
      user = await authService.findCurrentChild(req.session.userId);
      user["type"] = "child";
    }

    res.send(user);
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
