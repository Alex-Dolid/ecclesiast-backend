// Types
import { BiblesBooksCommonSchemeType } from "./types";
// Schemas
import { common } from "./common";

export const create: BiblesBooksCommonSchemeType = {
  ...common,
  required: [ "name", "locale" ]
};
