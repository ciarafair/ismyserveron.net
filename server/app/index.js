import { dirname, join } from "path";
import { testDelete, testGet, testPost, testPut } from "./lib/api/testRes.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import urlPost from "./lib/api/urlRes.js";
import winstonLogger from "./lib/winstonFunction.js";

dotenv.config();

const __filenameServer = fileURLToPath(import.meta.url);
const __dirnameServer = dirname(__filenameServer);
const homePath = (req, res) => {
	res.sendFile(join(__dirnameServer, "index.html"));
};

// eslint-disable-next-line new-cap
const ExpressRouter = express.Router();
ExpressRouter.get("/", homePath);

const ExpressApp = express();
ExpressApp.use(cors());
ExpressApp.set("port", process.env.PORT);
ExpressApp.use("/", ExpressRouter);
ExpressApp.use(express.json());
ExpressApp.use(express.static("../public/favicon.ico"));

ExpressApp.get("/api", (req, res) => {
	urlPost(req, res);
});

ExpressApp.delete("/test", (req, res) => {
	testDelete(req, res);
});
ExpressApp.get("/test", (req, res) => {
	testGet(req, res);
});
ExpressApp.post("/test", (req, res) => {
	testPost(req, res);
});
ExpressApp.put("/test", (req, res) => {
	testPut(req, res);
});

const URL_MESSAGE = `Server started at http://${process.env.HOST}:${process.env.PORT}. Press CTRL-C to stop`;
ExpressApp.listen(process.env.PORT, () => {
	winstonLogger.info(URL_MESSAGE);
});
