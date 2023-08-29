import { time } from "console";
import winstonLogger from "../winstonFunction.js";

const TWO_HUNDRED = 200;

const testGet = (req, res) => {
	res.status(TWO_HUNDRED).send(time);
	winstonLogger.info("Got a GET request at /test");
};

export { testGet };
