import winstonLogger from "../winstonFunction.js";

const TWO_HUNDRED = 200;
const DATE = new Date();
const currentTime = DATE.toString();

const testGet = (req, res) => {
	res.status(TWO_HUNDRED).send(currentTime);
	winstonLogger.info("Got a GET request at /test");
};

export { testGet };
