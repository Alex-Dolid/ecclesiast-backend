// Types
import { BiblesChaptersCommonSchemeType } from "./types";

export const common: BiblesChaptersCommonSchemeType = {
  type: "object",
  properties: {
    _id: {
      type: "string",
      nullable: true
    },
    name: {
      type: "number",
      minimum: 1
    }
  },
  additionalProperties: false,
  required: []
};
