import * as authReposity from "../repositories/auth.repository";
import { comparePassword } from "tree-house-authentication";

export async function login(payload) {
  const { password } = payload;
  try {
    const admin = await authReposity.getAdmin();

    // Match password
    const passwordMatch = await comparePassword(password, admin.password);
    if (!passwordMatch) throw "invalid password";

    return admin;
  } catch (error) {
    throw error;
  }
}

export async function logout(req) {
  return new Promise((resolve, reject) => {
    req.session.destroy(error => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
}
