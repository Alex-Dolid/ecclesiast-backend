// Core
import * as mongoose from "mongoose";
// Libs
import dg from "debug";
// Utils
import { getDB } from "../utils";

const debug = dg("db");
const { DB_URL, DB_PORT, DB_NAME } = getDB();

const mongooseOptions = {
  promiseLibrary: global.Promise,
  poolSize: 50,
  keepAlive: true,
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: false
};

const connection = mongoose.connect(
  `mongodb://${ DB_URL }:${ DB_PORT }/${ DB_NAME }`,
  mongooseOptions
);

connection
  .then(() => {
    debug(`DB ${ DB_NAME } connected`);
  })
  .catch(({ message }) => {
    debug(`DB ${ DB_NAME } connected error ${ message }`);
  });
