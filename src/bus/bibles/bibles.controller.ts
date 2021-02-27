// Controllers
import { BiblesModel, IBiblesModel } from "./bibles.model";
// Types
import { BibleType } from "./bibles.odm";

type BiblesControllerModelsType = {
  bibles: IBiblesModel
}

export class BiblesController implements IBiblesModel {
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
}
