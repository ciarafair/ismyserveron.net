import winstonLogger from "../winstonFunction.js";

const TWO_HUNDRED = 200;

const testGet = (req, res) => {
	const currentTime = new Date().toString();
	res.status(TWO_HUNDRED).send(currentTime);
	winstonLogger.info("Got a GET request at /test");
};

export default testGet;
