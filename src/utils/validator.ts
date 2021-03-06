// Core
import { NextFunction, Request, Response } from "express";
// Libs
import Ajv, { ValidateFunction, JSONSchemaType } from "ajv";
// Utils
import { ValidationError } from "./errors";
// Types
import { LocalesSchemasType } from "../bus/locales";
import { BiblesSchemasType } from "../bus/bibles";
import { BiblesVersesSchemesType } from "../bus/biblesVerses";
import { BiblesChaptersSchemasType } from "../bus/biblesChapters";
import { BiblesBooksSchemasType } from "../bus/biblesBooks";

export const validator = (
  schema: JSONSchemaType<object>
    | LocalesSchemasType
    | BiblesSchemasType
    | BiblesVersesSchemesType
    | BiblesChaptersSchemasType
    | BiblesBooksSchemasType
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const ajv = new Ajv({ allErrors: true });
    const validate: ValidateFunction = ajv.compile(schema);
    const valid = validate(req.body);

    if (valid) {
      return next();
    }

    let errorMessage = "Error validation";
    const errors = validate.errors?.map(({ message, dataPath }) => `${ dataPath } ${ message }`).join(", ");
    if (errors) {
      errorMessage = errors;
    }

    return next(new ValidationError(errorMessage, 400));
  };
};
