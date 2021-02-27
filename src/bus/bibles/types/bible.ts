export type BibleVerseType = {
  name: number,
  text: string
};

export type BibleVersesType = BibleVerseType[];

export type BibleChapterType = {
  name: number,
  verses: BibleVersesType
};

export type BibleChaptersType = BibleChapterType[];

export type BibleBookType = {
  name: string,
  chapters: BibleChaptersType
};

export type BibleBooksType = BibleBookType[];
