// Types
import { JSONSchemaType } from "ajv";
import { LocaleType } from "../locales.odm";
// Schemas
import { common } from "./common";

export const create: JSONSchemaType<LocaleType> = {
  ...common,
  required: [ "code2", "code3", "name" ]
};
