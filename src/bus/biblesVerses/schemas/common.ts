// Types
import { BiblesVersesCommonSchemeType } from "./types";

export const common: BiblesVersesCommonSchemeType = {
  type: "object",
  properties: {
    _id: {
      type: "string",
      nullable: true
    },
    name: {
      type: "number",
      minimum: 1
    },
    text: {
      type: "string",
      minLength: 3
    },
    locale: {
      type: "string",
      minLength: 3
    },
    chapter: {
      type: "string",
      minLength: 3
    },
    book: {
      type: "string",
      minLength: 3
    },
    bibleId: {
      type: "string",
      minLength: 3
    }
  },
  additionalProperties: false,
  required: []
};
