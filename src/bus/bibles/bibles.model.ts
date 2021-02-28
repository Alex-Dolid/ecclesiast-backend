// Odm
import { BiblesOdm, BibleType } from "./bibles.odm";
// Utils
import { NotFoundError, ServerError } from "../../utils";

export type BiblesQueryParamsForGetAllFuncType = {
  select?: string
}

export interface IBiblesModel {
  create: (payload: BibleType) => Promise<BibleType>;
  getAll: (queryParams: BiblesQueryParamsForGetAllFuncType) => Promise<BibleType[]>;
  getById: (_id: string) => Promise<BibleType>;
  updateById: (_id: string, payload: Partial<BibleType>) => Promise<BibleType>;
  removeById: (_id: string) => Promise<BibleType>;
}

export class BiblesModel implements IBiblesModel {
  async create(payload: BibleType): Promise<BibleType> {
    try {
      return await BiblesOdm.create(payload);
    } catch (error) {
      throw new ServerError(error.message);
    }
  }

  async getAll(queryParams: BiblesQueryParamsForGetAllFuncType): Promise<BibleType[]> {
    try {
      return await BiblesOdm
        .find()
        .sort("-created")
        .select(queryParams.select || "-__v -created -modified")
        .populate("locale", "-created -modified -__v")
        .populate({
          path: "verses",
          select: "-created -modified -__v",
          populate: {
            path: "locale chapter book",
            select: "-created -modified -__v"
          }
        })
        .lean();
    } catch (error) {
      throw new ServerError(error.message);
    }
  }

  async getById(_id: string): Promise<BibleType> {
    try {
      const data = await BiblesOdm
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

  async updateById(_id: string, payload: Partial<BibleType>): Promise<BibleType> {
    try {
      const data = await BiblesOdm.findOneAndUpdate({ _id }, payload, {
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

  async removeById(_id: string): Promise<BibleType> {
    try {
      const data = await BiblesOdm.findOneAndDelete({ _id });

      if (!data) {
        throw new NotFoundError(`can not find document with id ${ _id }`);
      }

      return data;
    } catch (error) {
      throw new ServerError(error.message);
    }
  }
}
