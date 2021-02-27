// Core
import * as mongoose from "mongoose";
// Types
import { Document, Schema } from "mongoose";
import { BibleBooksType } from "./types";
// Odm
import { LocalesOdm, LocaleType } from "../locales";

export type BibleType = {
  _id?: string,
  author: string,
  name: string,
  translators?: string[],
  edition?: string,
  books: BibleBooksType,
  src?: string,
  locale: LocaleType
}

export type BibleDocType = Document & BibleType;

const BibleSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    author: {
      type: String,
      required: true
    },
    translators: {
      type: [ String ]
    },
    edition: {
      type: String
    },
    src: {
      type: String
    },
    books: [
      {
        name: String,
        chapters: [
          {
            name: Number,
            verses: [
              {
                name: Number,
                text: String
              }
            ]
          }
        ]
      }
    ],
    locale: {
      type: Schema.Types.ObjectId,
      ref: LocalesOdm
    }
  },
  { timestamps: { createdAt: "created", updatedAt: "modified" } }
);

export const BiblesOdm = mongoose.model<BibleDocType>("bibles", BibleSchema);
