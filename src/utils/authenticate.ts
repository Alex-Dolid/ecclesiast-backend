// Core
import { Request, Response, NextFunction } from "express";
// Libs
import * as jwt from "jsonwebtoken";
import { JsonWebTokenError } from "jsonwebtoken";
// Instruments
import { ValidationError } from "./errors";
// Helpers
import { generatePrivateKey, getToken } from "../helpers";

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization && getToken(req.headers.authorization);

  if (!token) {
    throw new ValidationError("token not found", 401);
  }

  const isRefreshUrl = () => req.url === "/refresh";

  let refreshToken = null;
  if (isRefreshUrl()) {
    const decodedAccessToken = jwt.decode(token);
    if (decodedAccessToken && typeof decodedAccessToken === "object") {
      refreshToken = decodedAccessToken.refreshToken;
    }
  }

  const _token = isRefreshUrl() ? refreshToken : token;
  const _typePrivateKey = isRefreshUrl() ? "refreshToken" : "accessToken";

  jwt.verify(
    _token,
    generatePrivateKey(_typePrivateKey),
    (error: JsonWebTokenError | null, _decodedAccessToken: any): Response | void => {
      if (error) {
        throw new ValidationError(error.message, isRefreshUrl() ? 403 : 401);
      }

      if (isRefreshUrl()) {
        next();
      } else {
        jwt.verify(
          _decodedAccessToken?.refreshToken,
          generatePrivateKey("refreshToken"),
          (_error: JsonWebTokenError | null): Response | void => {
            if (_error) {
              return res.status(403).json({ error: true, message: _error.message, result: {} });
            }

            next();
          }
        );
      }
    }
  );
};
