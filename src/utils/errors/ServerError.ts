// Utils
import { CommonError } from "./CommonError";
// Types
import { ErrorArgsType } from "../../types";

export class ServerError extends CommonError {
  constructor(...args: ErrorArgsType) {
    super({ args: [ ...args ], type: "ServerError" });
    const [ , statusCode = 500 ] = args;

    Error.captureStackTrace(this, ServerError);
    this.name = "ServerError";
    this.statusCode = statusCode;
  }
}
