// Core
import { NextFunction, Request, Response } from "express";
// Libs
import dg from "debug";
// Instruments
import { BiblesChaptersController } from "../../biblesChapters.controller";

const debug = dg("router:biblesChapters:hash");

export const getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  debug(`${ req.method } - ${ req.originalUrl }`);

  try {
    const { _id } = req.params;
    const controller = new BiblesChaptersController();
    const data = await controller.getById(_id);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const updateById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  debug(`${ req.method } - ${ req.originalUrl }`);

  try {
    const { _id } = req.params;
    const payload = req.body;
    const controller = new BiblesChaptersController();
    const data = await controller.updateById(_id, payload);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const removeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  debug(`${ req.method } - ${ req.originalUrl }`);

  try {
    const { _id } = req.params;
    const controller = new BiblesChaptersController();
    const data = await controller.removeById(_id);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
