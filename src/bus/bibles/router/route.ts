// Core
import { NextFunction, Request, Response } from "express";
// Libs
import dg from "debug";
// Controllers
import { BiblesController } from "../bibles.controller";

const debug = dg("router:bibles");

export const get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  debug(`${ req.method } - ${ req.originalUrl }`);

  try {
    const query = { ...req.query };
    const controller = new BiblesController();
    const data = await controller.getAll(query);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const post = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  debug(`${ req.method } - ${ req.originalUrl }`);

  try {
    const payload = req.body;
    const controller = new BiblesController();
    const data = await controller.create(payload);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
