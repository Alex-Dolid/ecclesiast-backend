// Controllers
import { BiblesBooksModel, IBiblesBooksModel } from "./biblesBooks.model";
// Types
import { BibleBookType } from "./biblesBooks.odm";

interface IBiblesBooksController {
  create: (payload: BibleBookType) => Promise<BibleBookType>;
  getAll: () => Promise<BibleBookType[]>;
  getById: (_id: string) => Promise<BibleBookType>;
  updateById: (_id: string, payload: Partial<BibleBookType>) => Promise<BibleBookType>;
  removeById: (_id: string) => Promise<BibleBookType>;
}

type BiblesBooksControllerModelsType = {
  books: IBiblesBooksModel
}

export class BiblesBooksController implements IBiblesBooksController {
  private readonly models: BiblesBooksControllerModelsType;

  constructor() {
    this.models = {
      books: new BiblesBooksModel()
    };
  }

  async create(payload: BibleBookType): Promise<BibleBookType> {
    return await this.models.books.create(payload);
  }

  async getAll(): Promise<BibleBookType[]> {
    return await this.models.books.getAll();
  }

  async getById(_id: string): Promise<BibleBookType> {
    return await this.models.books.getById(_id);
  }

  async updateById(_id: string, payload: Partial<BibleBookType>): Promise<BibleBookType> {
    return await this.models.books.updateById(_id, payload);
  }

  async removeById(_id: string): Promise<BibleBookType> {
    return await this.models.books.removeById(_id);
  }
}
