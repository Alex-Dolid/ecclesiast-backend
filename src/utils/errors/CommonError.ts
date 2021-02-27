// Types
import { IErrorHandler, ErrorArgsType } from "../../types";

interface ICommonErrorConstructor {
  args: ErrorArgsType,
  type: "NotFoundError" | "ServerError" | "ValidationError"
}

export abstract class CommonError extends Error implements IErrorHandler {
  statusCode: number;

  protected constructor({ args, type }: ICommonErrorConstructor) {
    super(args[0]);
    const [ , statusCode = 400 ] = args;

    if (!/^[1-5]{1}[0-9]{2}$/.test(statusCode.toString())) {
      throw new Error(
        `statusCode in ${ type } should be a number in range from 100 to 599`
      );
    }

    Error.captureStackTrace(this, CommonError);
    this.name = "CommonError";
    this.statusCode = statusCode;
  }
}
