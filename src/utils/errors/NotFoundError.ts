// Utils
import { CommonError } from "./CommonError";
// Types
import { ErrorArgsType } from "../../types";

export class NotFoundError extends CommonError {
  constructor(...args: ErrorArgsType) {
    super({ args: [ ...args ], type: "NotFoundError" });
    const [ , statusCode = 404 ] = args;

    Error.captureStackTrace(this, NotFoundError);
    this.name = "NotFoundError";
    this.statusCode = statusCode;
  }
}
