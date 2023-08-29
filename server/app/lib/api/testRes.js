import winstonLogger from "../winstonFunction.js";

const TWO_HUNDRED = 200;
const ZERO = 0;
const EIGHT = 8;
const ONE = 1;

const updateTime = () => {
	const milliseconds = new Date().getMilliseconds().
		toString().
		slice(ZERO, EIGHT);
	const seconds = new Date().getSeconds().
		toString().
		slice(ZERO, EIGHT);
	const minutes = new Date().getMinutes().
		toString().
		slice(ZERO, EIGHT);
	const hours = new Date().getHours().
		slice(ZERO, EIGHT);
	const currentTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
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
