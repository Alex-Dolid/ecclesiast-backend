// Odm
import { LocalesOdm, LocaleDocType, LocaleType } from "./locales.odm";
// Utils
import { NotFoundError, ServerError } from "../../utils";

export interface ILocalesModel {
  create: (payload: LocaleType) => Promise<LocaleType>;
  getAll: () => Promise<LocaleType[]>;
  getById: (_id: string) => Promise<LocaleType>;
  updateById: (_id: string, payload: Partial<LocaleType>) => Promise<LocaleDocType>;
  removeById: (_id: string) => Promise<LocaleDocType>;
}

export class LocalesModel implements ILocalesModel {
  async create(payload: LocaleType): Promise<LocaleType> {
    try {
      return await LocalesOdm.create(payload);
    } catch (error) {
      throw new ServerError(error.message);
    }
  }

  async getAll(): Promise<LocaleType[]> {
    try {
      return await LocalesOdm
        .find()
        .sort("-created")
        .select("-__v -created -modified")
        .lean();
    } catch (error) {
      throw new ServerError(error.message);
    }
  }

  async getById(_id: string): Promise<LocaleType> {
    try {
      const data = await LocalesOdm
        .findOne({ _id })
        .select("-__v")
        .lean();

      if (!data) {
        throw new NotFoundError(`can not find document with id ${ _id }`);
      }

      return data;
    } catch (error) {
      throw new ServerError(error.message);
    }
  }

  async updateById(_id: string, payload: Partial<LocaleType>): Promise<LocaleDocType> {
    try {
      const data = await LocalesOdm.findOneAndUpdate({ _id }, payload, {
        new: true
      });

      if (!data) {
        throw new NotFoundError(`can not find document with id ${ _id }`);
      }

      return data;
    } catch (error) {
      throw new ServerError(error.message);
    }
  }

  async removeById(_id: string): Promise<LocaleDocType> {
    try {
      const data = await LocalesOdm.findOneAndDelete({ _id });

      if (!data) {
        throw new NotFoundError(`can not find document with id ${ _id }`);
      }

      return data;
    } catch (error) {
      throw new ServerError(error.message);
    }
  }
}
