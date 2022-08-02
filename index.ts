import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import fs from "fs";
import path from "path";
import loadRoutes from "./utils/loadRoutes";

const app = express();
const port = process.env.PORT || 3000;

(async () => {
  const routes = fs.readdirSync(path.resolve(__dirname, "routes"));
  await loadRoutes(app, routes);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})();
