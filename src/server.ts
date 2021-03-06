// Core
import * as express from "express";
import { Request, Response, Application, NextFunction } from "express";
// Libs
import * as cors from "cors";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerJsdoc from "swagger-jsdoc";
// Instruments
import { errorLogger, logger, NotFoundError, notFoundLogger, validationLogger } from "./utils";
import { swaggerOptions } from "./init";
import config from "./config";
// Routes
import { locales, bibles, biblesBooks, biblesChapters, biblesVerses } from "./routers";
// Types
import { IErrorHandler } from "./types";

const app: Application = express();
app.use(cors());

app.use(express.json({ limit: "10kb" }));

// Logger
if (process.env.NODE_ENV === "dev") {
  app.use((req, res, next) => {
    let body = null;

    if (req.method !== "GET") {
      body = JSON.stringify(req.body, null, 2);
    }

    logger.debug(`${ req.method } ${ body ? `\n${ body }` : "" }`);
    next();
  });
}

// Routers
app.use("/locales", locales);
app.use("/bibles", bibles);
app.use("/bibles-books", biblesBooks);
app.use("/bibles-chapters", biblesChapters);
app.use("/bibles-verses", biblesVerses);

const swaggerDocs = swaggerJsdoc(swaggerOptions);

if (config.swagger.access === "true") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

app.use("*", (req, res, next) => {
  const error = new NotFoundError(
    `Can not find right route for method ${ req.method } and path ${ req.originalUrl }`
  );
  next(error);
});

if (process.env.NODE_ENV !== "test") {
  app.use((error: Error & IErrorHandler, req: Request, res: Response, next: NextFunction) => {
    const { name, message, statusCode } = error;
    const errorMessage = `${ name }: ${ message }`;

    switch (error.name) {
      case "NotFoundError":
        notFoundLogger.error(errorMessage);
        break;

      case "ValidationError":
        validationLogger.error(errorMessage);
        break;

      default:
        errorLogger.error(errorMessage);
        break;
    }

    const status = statusCode || 500;
    res.status(status).json({ message });
  });
}

export { app };
