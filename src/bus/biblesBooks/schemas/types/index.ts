// Types
import { JSONSchemaType } from "ajv";
import { BibleBookType } from "../../biblesBooks.odm";

export type BiblesBooksCommonSchemeType = JSONSchemaType<BibleBookType & { locale: string }>;
export type BiblesBooksSchemasType = BiblesBooksCommonSchemeType;
