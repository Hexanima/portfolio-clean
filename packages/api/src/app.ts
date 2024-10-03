import express from "express";
import { PORT } from "./constants";

import dotenv from "dotenv";
import morgan from "morgan";
import { createRouter } from "./utils/create-router";
dotenv.config();

const app = express();

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

app.use(morgan("dev"))

app.use(createRouter())