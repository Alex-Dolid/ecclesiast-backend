// Types
import { BiblesChaptersCommonSchemeType } from "./types";
// Schemas
import { common } from "./common";

export const create: BiblesChaptersCommonSchemeType = {
  ...common,
  required: [ "name" ]
};
