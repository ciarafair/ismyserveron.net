import winstonLogger from "../winstonFunction.js";

const TWO_HUNDRED = 200;

const testDelete = (req, res) => {
	res.status(TWO_HUNDRED).send("Got a DELETE request at /test");
	winstonLogger.info("Got a DELETE request at /test");
};

const testGet = (req, res) => {
	res.status(TWO_HUNDRED).send("Got a GET request at /test");
	winstonLogger.info("Got a GET request at /test");
};

const testPost = (req, res) => {
	res.status(TWO_HUNDRED).send("Got a POST request at /test");
	winstonLogger.info("Got a POST request at /test");
};

const testPut = (req, res) => {
	res.status(TWO_HUNDRED).send("Got a PUT request at /test");
	winstonLogger.info("Got a PUT request at /test");
};

export { testDelete, testGet, testPost, testPut };
