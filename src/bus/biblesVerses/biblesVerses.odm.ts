// Core
import * as mongoose from "mongoose";
// Types
import { Document, Schema } from "mongoose";
// Odm
import { LocalesOdm, LocaleType } from "../locales";
import { BiblesChaptersOdm, BibleChapterType } from "../biblesChapters";

export type BibleVerseType = {
  _id?: string,
  name: number,
  text: string
  locale: LocaleType,
  chapter: BibleChapterType
}

export type BibleVerseDocType = Document & BibleVerseType;

const BibleVerseSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    text: {
      type: String,
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

export const BiblesVersesOdm = mongoose.model<BibleVerseDocType>("biblesVerses", BibleVerseSchema);
