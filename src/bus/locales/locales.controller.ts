// Models
import { LocalesModel, ILocalesModel } from "./locales.model";
// Odm
import { LocaleDocType, LocaleType } from "./locales.odm";

type LocalesControllerModelsType = {
  locales: ILocalesModel
}

export class LocalesController implements ILocalesModel {
  private readonly models: LocalesControllerModelsType;

  constructor() {
    this.models = {
      locales: new LocalesModel()
    };
  }

  async create(payload: LocaleType): Promise<LocaleType> {
    return await this.models.locales.create(payload);
  }

  async getAll(): Promise<LocaleType[]> {
    return await this.models.locales.getAll();
  }

  async getById(_id: string): Promise<LocaleType> {
    return await this.models.locales.getById(_id);
  }

  async updateById(_id: string, payload: Partial<LocaleType>): Promise<LocaleDocType> {
    return await this.models.locales.updateById(_id, payload);
  }

  async removeById(_id: string): Promise<LocaleDocType> {
    return await this.models.locales.removeById(_id);
  }
}
