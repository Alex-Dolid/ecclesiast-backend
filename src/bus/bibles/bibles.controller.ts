// Controllers
import { BiblesModel, IBiblesModel } from "./bibles.model";
// Types
import { BibleType } from "./bibles.odm";

interface IBiblesController {
  create: (payload: BibleType) => Promise<BibleType>;
  getAll: () => Promise<BibleType[]>;
  getById: (_id: string) => Promise<BibleType>;
  updateById: (_id: string, payload: Partial<BibleType>) => Promise<BibleType>;
  removeById: (_id: string) => Promise<BibleType>;
  getBiblesFragments: (q: string) => Promise<void>
}

type BiblesControllerModelsType = {
  bibles: IBiblesModel
}

export class BiblesController implements IBiblesController {
  private readonly models: BiblesControllerModelsType;

  constructor() {
    this.models = {
      bibles: new BiblesModel()
    };
  }

  async create(payload: BibleType): Promise<BibleType> {
    return await this.models.bibles.create(payload);
  }

  async getAll(): Promise<BibleType[]> {
    return await this.models.bibles.getAll();
  }

  async getById(_id: string): Promise<BibleType> {
    return await this.models.bibles.getById(_id);
  }

  async updateById(_id: string, payload: Partial<BibleType>): Promise<BibleType> {
    return await this.models.bibles.updateById(_id, payload);
  }

  async removeById(_id: string): Promise<BibleType> {
    return await this.models.bibles.removeById(_id);
  }

  async getBiblesFragments(q: string): Promise<void> {
    // TODO
  }
}
