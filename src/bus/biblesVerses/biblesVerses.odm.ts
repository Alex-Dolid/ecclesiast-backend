// Core
import * as mongoose from "mongoose";
// Types
import { Document, Schema } from "mongoose";
// Odm
import { LocalesOdm, LocaleType } from "../locales";
import { BiblesChaptersOdm, BibleChapterType } from "../biblesChapters";
import { BibleBookType, BiblesBooksOdm } from "../biblesBooks";

export type BibleVerseType = {
  _id?: string,
  name: number,
  text: string
  locale: LocaleType,
  chapter: BibleChapterType,
  book: BibleBookType,
  bibleId: string
}

export type BibleVerseDocType = Document & BibleVerseType;

const BibleVerseSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: Number,
      required: true,
      unique: true
    },
    text: {
      type: String,
      required: true
    },
    bibleId: {
      type: String,
      required: true
    },
    book: {
      type: Schema.Types.ObjectId,
      ref: BiblesBooksOdm,
      required: true
    },
    chapter: {
      type: Schema.Types.ObjectId,
      ref: BiblesChaptersOdm,
      required: true
    },
    locale: {
      type: Schema.Types.ObjectId,
      ref: LocalesOdm,
      required: true
    }
  },
  { timestamps: { createdAt: "created", updatedAt: "modified" } }
);

export const BiblesVersesOdm = mongoose.model<BibleVerseDocType>("bibles-verses", BibleVerseSchema);
