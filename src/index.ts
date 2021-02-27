// Core
import * as debug from "debug";
import { app } from "./server";
// Instruments
import { getPort } from "./utils";
// DB
import "./db";

const PORT = getPort();
const dg = debug("server:main");

app.listen(PORT, () => {
  dg(`Server API is up on port ${ PORT }`);
});
