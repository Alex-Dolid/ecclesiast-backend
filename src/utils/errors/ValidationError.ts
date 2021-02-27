// Utils
import { CommonError } from "./CommonError";
// Types
import { ErrorArgsType } from "../../types";

export class ValidationError extends CommonError {
  constructor(...args: ErrorArgsType) {
    super({ args: [ ...args ], type: "ValidationError" });
    const [ , statusCode = 400 ] = args;

    Error.captureStackTrace(this, ValidationError);
    this.name = "ValidationError";
    this.statusCode = statusCode;
  }
}
