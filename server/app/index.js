import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { testGet } from "./lib/api/testRes.js";
import winstonLogger from "./lib/winstonFunction.js";

dotenv.config();

const __filenameServer = fileURLToPath(import.meta.url);
const __dirnameServer = path.dirname(__filenameServer);
const homePath = (req, res) => {
	res.sendFile(path.join(__dirnameServer, "index.html"));
};

// eslint-disable-next-line new-cap
const ExpressRouter = express.Router();
ExpressRouter.get("/", homePath);

const ExpressApp = express();
ExpressApp.use(cors());
ExpressApp.use(express.json());
ExpressApp.options("*", cors());
ExpressApp.use("/", ExpressRouter);
ExpressApp.set("port", process.env.PORT);
ExpressApp.use(express.static(path.join(__dirnameServer, "public")));
ExpressApp.use((req, res, next) => {
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET");
	res.header("Access-Control-Allow-Origin", "*");
	next();
});


ExpressApp.get("/api", (req, res) => {
	testGet(req, res);
});

const URL_MESSAGE = `Server started at http://${process.env.HOST}:${process.env.PORT}. Press CTRL-C to stop`;
ExpressApp.listen(process.env.PORT, () => {
	winstonLogger.info(URL_MESSAGE);
});
