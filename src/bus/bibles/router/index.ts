// Core
import * as express from "express";
// Routes
import { get, post } from "./route";
import { getById, removeById, updateById } from "./hash";
// Utils
import { authenticate, limiter, validator } from "../../../utils";
// Schema
import { commonSchema, createSchema } from "../schemas";

const router = express.Router();

/**
 * @swagger
 * /bibles:
 *  get:
 *    tags:
 *      - Bibles
 *    summary: Get all bibles
 *    responses:
 *      '200':
 *        description: Get all bibles data success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Bibles'
 */
router.get("/", [ limiter(10, 60 * 1000) ], get);
router.post("/", [ limiter(10, 60 * 1000), validator(createSchema) ], post);

router.get("/:_id", [ authenticate, limiter(10, 60 * 1000) ], getById);
router.put("/:_id", [ limiter(10, 60 * 1000), validator(commonSchema) ], updateById);
router.delete("/:_id", [ authenticate, limiter(10, 60 * 1000) ], removeById);

export { router as biblesRouter };
