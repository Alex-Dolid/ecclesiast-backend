// Types
import { BiblesCommonSchemeType } from "./types";
// Schemas
import { common } from "./common";

export const create: BiblesCommonSchemeType = {
  ...common,
  required: [ "name", "locale", "author" ]
};
