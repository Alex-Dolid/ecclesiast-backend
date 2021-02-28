// Types
import { JSONSchemaType } from "ajv";
import { BibleType } from "../../bibles.odm";

export type BiblesCommonSchemeType = JSONSchemaType<BibleType & { locale: string, verses: string[] }>;
export type BiblesSchemasType = BiblesCommonSchemeType;
