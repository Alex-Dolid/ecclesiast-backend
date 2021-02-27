import { createLogger, format, transports } from "winston";

const { combine, timestamp, label, printf } = format;

const logFormat = printf(({ level, message, label: _label, timestamp: _timestamp }) => {
  return `${ _timestamp } [${ _label }] ${ level }: ${ message }`;
});

export const logger = createLogger({
  format: combine(label({ label: "Ecclesiast API" }), timestamp(), logFormat),
  level: "debug",
  transports: [ new transports.Console() ]
});
