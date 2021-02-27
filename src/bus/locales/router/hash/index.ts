// Core
import { NextFunction, Request, Response } from "express";
// Instruments
import dg from "debug";
// Controllers
import { LocalesController } from "../../locales.controller";

const debug = dg("router:locales:hash");

export const getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  debug(`${ req.method } - ${ req.originalUrl }`);

  try {
    const { _id } = req.params;
    const controller = new LocalesController();
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
    const controller = new LocalesController();
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
    const controller = new LocalesController();
    const data = await controller.removeById(_id);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
