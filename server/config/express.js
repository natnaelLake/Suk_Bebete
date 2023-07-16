import express from "express";
import { logger } from "./winstonLogger.js";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from 'morgan'
import cors from "cors";
import router from "./routes.js";
import passport from "passport";

const app = express();

app.use(morgan("combined"));
logger.stream = {
    write: (message) => {
      logger.info(message);
    },
  };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(cors());

app.use(passport.initialize())
app.use("/", router);

export default app;
