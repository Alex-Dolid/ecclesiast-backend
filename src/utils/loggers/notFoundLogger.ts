// Core
import { createLogger, format, transports } from "winston";
import * as path from "path";

const { combine, timestamp, printf } = format;
const logFormat = printf(({ message, timestamp: _timestamp }) => `${ _timestamp } ${ message }`);
const filename = path.resolve(path.join("logs", "not_found_errors.log"));

export const notFoundLogger = createLogger({
  level: "error",
  format: combine(timestamp(), logFormat),
  transports: [ new transports.File({ filename, level: "error" }) ]
});
