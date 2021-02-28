// Core
import * as mongoose from "mongoose";
// Types
import { Document, Schema } from "mongoose";

export type BibleChapterType = {
  _id?: string,
  name: number,
}

export type BibleChaptersDocType = Document & BibleChapterType;

const BibleChaptersSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: Number,
      required: true,
      unique: true
    }
  },
  { timestamps: { createdAt: "created", updatedAt: "modified" } }
);

export const BiblesChaptersOdm = mongoose.model<BibleChaptersDocType>("biblesChapters", BibleChaptersSchema);
