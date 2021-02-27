// Core
import * as mongoose from "mongoose";
// Types
import { Schema, Document } from "mongoose";

export type LocaleType = {
  _id?: string,
  code2: string,
  code3: string,
  name: string,
}

export type LocaleDocType = Document & LocaleType;

const LocaleSchema: Schema = new Schema(
  {
    code2: {
      type: String,
      required: true,
      unique: true
    },
    code3: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: "created", updatedAt: "modified" } }
);

export const LocalesOdm = mongoose.model<LocaleDocType>("locales", LocaleSchema);
