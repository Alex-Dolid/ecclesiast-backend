// Core
import * as jwt from "jsonwebtoken";
import { generatePrivateKey } from "./generatePrivateKey";

export const createToken = async (): Promise<string> => {
  const payload = { refreshToken: await jwt.sign({}, generatePrivateKey("refreshToken"), { expiresIn: 86400 }) };
  const token = await jwt.sign(payload, generatePrivateKey("accessToken"), { expiresIn: 900 });

  return token;
};
