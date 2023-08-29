import winstonLogger from "../winstonFunction.js";

const TWO_HUNDRED = 200;
const ONE = 1;

const updateTime = () => {
	const currentTime = new Date().
		getTime().
		valueOf().
		toString();
	return currentTime;
};

let currentTime = updateTime();

const testGet = (req, res) => {
	res.status(TWO_HUNDRED).send(currentTime);
	winstonLogger.info("Got a GET request at /test");
};

setInterval(() => {
	currentTime = updateTime();
}, ONE);

export { testGet };
