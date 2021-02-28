// Controllers
import { BiblesChaptersModel, IBiblesChaptersModel } from "./biblesChapters.model";
// Types
import { BibleChapterType } from "./biblesChapters.odm";

interface IBiblesChaptersController {
  create: (payload: BibleChapterType) => Promise<BibleChapterType>;
  getAll: () => Promise<BibleChapterType[]>;
  getById: (_id: string) => Promise<BibleChapterType>;
  updateById: (_id: string, payload: Partial<BibleChapterType>) => Promise<BibleChapterType>;
  removeById: (_id: string) => Promise<BibleChapterType>;
}

type BiblesChaptersControllerModelsType = {
  chapters: IBiblesChaptersModel
}

export class BiblesChaptersController implements IBiblesChaptersController {
  private readonly models: BiblesChaptersControllerModelsType;

  constructor() {
    this.models = {
      chapters: new BiblesChaptersModel()
    };
  }

  async create(payload: BibleChapterType): Promise<BibleChapterType> {
    return await this.models.chapters.create(payload);
  }

  async getAll(): Promise<BibleChapterType[]> {
    return await this.models.chapters.getAll();
  }

  async getById(_id: string): Promise<BibleChapterType> {
    return await this.models.chapters.getById(_id);
  }

  async updateById(_id: string, payload: Partial<BibleChapterType>): Promise<BibleChapterType> {
    return await this.models.chapters.updateById(_id, payload);
  }

  async removeById(_id: string): Promise<BibleChapterType> {
    return await this.models.chapters.removeById(_id);
  }
}
