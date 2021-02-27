// Types
import { JSONSchemaType } from "ajv";
import { BibleType } from "../bibles.odm";
// Schemas
import { common } from "./common";


export const create: JSONSchemaType<BibleType & { locale: string }> = {
  ...common,
  required: [ "name", "locale", "author", "books" ]
};
