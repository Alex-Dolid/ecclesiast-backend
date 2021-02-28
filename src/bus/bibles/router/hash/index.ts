// Core
import { NextFunction, Request, Response } from "express";
// Libs
import dg from "debug";
// Instruments
import { BiblesController } from "../../bibles.controller";

const debug = dg("router:bibles:hash");

export const getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  debug(`${ req.method } - ${ req.originalUrl }`);

  try {
    const { _id } = req.params;
    const { q } = req.query;
    const controller = new BiblesController();
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
    const controller = new BiblesController();
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
    const controller = new BiblesController();
    const data = await controller.removeById(_id);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
