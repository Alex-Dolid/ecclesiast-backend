// Core
import { NextFunction, Request, Response } from "express";
// Libs
import dg from "debug";
// Controllers
import { BiblesVersesController } from "../biblesVerses.controller";
// Helpers
import { isEmptyObj } from "../../../helpers";

const debug = dg("router:biblesVerses");

export const get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  debug(`${ req.method } - ${ req.originalUrl }`);

  try {
    const query = {
      ...req.query,
      bibleId: req.query.bibleId?.toString() || "",
      text: req.query.text?.toString() || ""
    };

    const controller = new BiblesVersesController();
    const data = !isEmptyObj(query) ? await controller.getByQuery(query) : await controller.getAll();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const post = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  debug(`${ req.method } - ${ req.originalUrl }`);

  try {
    const payload = req.body;
    const controller = new BiblesVersesController();
    const data = await controller.create(payload);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
