// Types
import { JSONSchemaType } from "ajv";
import { BibleVerseType } from "../../biblesVerses.odm";

export type BiblesVersesCommonSchemeType = JSONSchemaType<BibleVerseType & { locale: string, chapter: string }>;
export type BiblesVersesSchemesType = BiblesVersesCommonSchemeType;
