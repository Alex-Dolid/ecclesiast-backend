// Types
import { BiblesVersesCommonSchemeType } from "./types";
// Schemas
import { common } from "./common";

export const create: BiblesVersesCommonSchemeType = {
  ...common,
  required: [ "name", "locale", "text", "chapter", "book", "bibleId" ]
};
