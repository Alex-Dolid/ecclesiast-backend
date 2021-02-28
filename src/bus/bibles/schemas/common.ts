// Types
import { BiblesCommonSchemeType } from "./types";

export const common: BiblesCommonSchemeType = {
  type: "object",
  properties: {
    _id: {
      type: "string",
      nullable: true
    },
    name: {
      type: "string",
      minLength: 3
    },
    author: {
      type: "string",
      minLength: 2
    },
    edition: {
      type: "string",
      minLength: 2,
      nullable: true
    },
    translators: {
      type: "array",
      items: {
        type: "string"
      },
      nullable: true
    },
    src: {
      type: "string",
      nullable: true
    },
    verses: {
      type: "array",
      items: {
        type: "string"
      }
    },
    locale: {
      type: "string",
      minLength: 2
    }
  },
  additionalProperties: false,
  required: []
};
