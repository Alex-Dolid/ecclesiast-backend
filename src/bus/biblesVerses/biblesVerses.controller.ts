// Controllers
import { BiblesVersesModel, IBiblesVersesModel } from "./biblesVerses.model";
// Types
import { BibleVerseType } from "./biblesVerses.odm";

interface IBiblesVersesController {
  create: (payload: BibleVerseType) => Promise<BibleVerseType>;
  getAll: () => Promise<BibleVerseType[]>;
  getById: (_id: string) => Promise<BibleVerseType>;
  updateById: (_id: string, payload: Partial<BibleVerseType>) => Promise<BibleVerseType>;
  removeById: (_id: string) => Promise<BibleVerseType>;
}

type BiblesVersesControllerModelsType = {
  verses: IBiblesVersesModel
}

export class BiblesVersesController implements IBiblesVersesController {
  private readonly models: BiblesVersesControllerModelsType;

  constructor() {
    this.models = {
      verses: new BiblesVersesModel()
    };
  }

  async create(payload: BibleVerseType): Promise<BibleVerseType> {
    return await this.models.verses.create(payload);
  }

  async getAll(): Promise<BibleVerseType[]> {
    return await this.models.verses.getAll();
  }

  async getById(_id: string): Promise<BibleVerseType> {
    return await this.models.verses.getById(_id);
  }

  async updateById(_id: string, payload: Partial<BibleVerseType>): Promise<BibleVerseType> {
    return await this.models.verses.updateById(_id, payload);
  }

  async removeById(_id: string): Promise<BibleVerseType> {
    return await this.models.verses.removeById(_id);
  }
}
