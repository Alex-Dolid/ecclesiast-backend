// Odm
import { BiblesBooksOdm, BibleBookType } from "./biblesBooks.odm";
// Utils
import { NotFoundError, ServerError } from "../../utils";

export interface IBiblesBooksModel {
  create: (payload: BibleBookType) => Promise<BibleBookType>;
  getAll: () => Promise<BibleBookType[]>;
  getById: (_id: string) => Promise<BibleBookType>;
  updateById: (_id: string, payload: Partial<BibleBookType>) => Promise<BibleBookType>;
  removeById: (_id: string) => Promise<BibleBookType>;
}

export class BiblesBooksModel implements IBiblesBooksModel {
  async create(payload: BibleBookType): Promise<BibleBookType> {
    try {
      return await BiblesBooksOdm.create(payload);
    } catch (error) {
      throw new ServerError(error.message);
    }
  }

  async getAll(): Promise<BibleBookType[]> {
    try {
      return await BiblesBooksOdm
        .find()
        .sort("-created")
        .select("-__v -created -modified")
        .populate("locale", "-created -modified -__v")
        .lean();
    } catch (error) {
      throw new ServerError(error.message);
    }
  }

  async getById(_id: string): Promise<BibleBookType> {
    try {
      const data = await BiblesBooksOdm
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

  async updateById(_id: string, payload: Partial<BibleBookType>): Promise<BibleBookType> {
    try {
      const data = await BiblesBooksOdm.findOneAndUpdate({ _id }, payload, {
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

  async removeById(_id: string): Promise<BibleBookType> {
    try {
      const data = await BiblesBooksOdm.findOneAndDelete({ _id });

      if (!data) {
        throw new NotFoundError(`can not find document with id ${ _id }`);
      }

      return data;
    } catch (error) {
      throw new ServerError(error.message);
    }
  }
}
