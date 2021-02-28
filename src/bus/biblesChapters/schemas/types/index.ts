// Types
import { JSONSchemaType } from "ajv";
import { BibleChapterType } from "../../biblesChapters.odm";

export type BiblesChaptersCommonSchemeType = JSONSchemaType<BibleChapterType>;
export type BiblesChaptersSchemasType = BiblesChaptersCommonSchemeType;
