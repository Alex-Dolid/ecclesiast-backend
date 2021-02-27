// Types
import { JSONSchemaType } from "ajv";
import { LocaleType } from "../locales.odm";

export const common: JSONSchemaType<LocaleType> = {
  type: "object",
  properties: {
    _id: {
      type: "string",
      nullable: true
    },
    code2: {
      type: "string",
      minLength: 2
    },
    code3: {
      type: "string",
      minLength: 3
    },
    name: {
      type: "string",
      minLength: 3
    }
  },
  additionalProperties: false,
  required: []
};
