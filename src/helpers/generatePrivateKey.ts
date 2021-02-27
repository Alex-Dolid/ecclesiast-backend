import * as crypto from "crypto-js";

export const generatePrivateKey = (type: "accessToken" | "refreshToken"): string => {
  const password = process.env.PASSWORD ? process.env.PASSWORD : "password";

  if (type === "accessToken") {
    return crypto.SHA256(process.env.PASSWORD + crypto.MD5(password)
      .toString())
      .toString();
  }

  return crypto.SHA512(password)
    .toString();
};
