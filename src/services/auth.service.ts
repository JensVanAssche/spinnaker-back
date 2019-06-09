import * as parentRepository from "../repositories/parent.repository";
import * as childRepositry from "../repositories/child.repository";
import { comparePassword } from "tree-house-authentication";

export async function loginParent(payload) {
  const { email, password } = payload;
  try {
    const user = await parentRepository.findByEmail(email);
    if (!user) throw "invalid email";

    // Match password
    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) throw "invalid password";

    return user;
  } catch (error) {
    throw error;
  }
}

export async function loginChild(payload) {
  const { firstName, lastName, email, password } = payload;
  try {
    const user = await childRepositry.findByEmail(firstName, lastName, email);
    if (!user) throw "invalid account";

    // Match password
    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) throw "invalid password";

    return user;
  } catch (error) {
    throw error;
  }
}

export async function findCurrentParent(userId) {
  const user = await parentRepository.findById(userId);
  return user;
}

export async function findCurrentChild(userId) {
  const user = await childRepositry.findById(userId);
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
