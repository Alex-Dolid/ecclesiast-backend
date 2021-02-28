// Types
import { LocalesCommonSchemeType } from "./types";
// Schemas
import { common } from "./common";

export const create: LocalesCommonSchemeType = {
  ...common,
  required: [ "code2", "code3", "name" ]
};
