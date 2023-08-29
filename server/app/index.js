import { dirname, join } from "path";
import { testDelete, testGet, testPost, testPut } from "./lib/api/testRes.js";
import cors from "cors";
import express from "express";
import { fileURLToPath } from "url";
import urlPost from "./lib/api/urlRes.js";
import winstonLogger from "./lib/winstonFunction.js";

const PORT_NUM = 9001;
const PORT = process.env.PORT || PORT_NUM;
const HOST = process.env.HOST || "localhost";
const URL_MESSAGE = `Server started at http://${HOST}:${PORT}. Press CTRL-C to stop`;

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
ExpressApp.set("port", PORT);
ExpressApp.use("/", ExpressRouter);
ExpressApp.use(express.json());

ExpressApp.get("/url", (req, res) => {
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

ExpressApp.listen(PORT, () => {
	winstonLogger.info(URL_MESSAGE);
});
