// Core
import { NextFunction, Request, Response } from "express";
// Instruments
import dg from "debug";
// Controllers
import { LocalesController } from "../locales.controller";

const debug = dg("router:locales");

export const get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  debug(`${ req.method } - ${ req.originalUrl }`);

  try {
    const controller = new LocalesController();
    const data = await controller.getAll();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const post = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  debug(`${ req.method } - ${ req.originalUrl }`);

  try {
    const payload = req.body;
    const controller = new LocalesController();
    const data = await controller.create(payload);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
