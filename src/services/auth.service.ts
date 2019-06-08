import * as parentRepository from "../repositories/parent.repository";
import { comparePassword } from "tree-house-authentication";

export async function loginParent(payload) {
  const { email, password } = payload;
  try {
    const user = await parentRepository.findByEmail(email);
    if (!user) throw "invalid email";

    // Match password
    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) throw "invalid password";

    return user.id;
  } catch (error) {
    throw error;
  }
}

export async function findCurrentUser(userId) {
  const user = await parentRepository.findById(userId);
  return user;
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
