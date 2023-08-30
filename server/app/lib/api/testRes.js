import { execSync } from "child_process";
import winstonLogger from "../winstonFunction.js";

const TWO_HUNDRED = 200;
const ZERO = 0;
const EIGHT = 8;
const ONE = 1;
const ONE_THOUSAND = 1000;

const updateTime = () => {
	const milliseconds = new Date().
		getMilliseconds().
		toString().
		slice(ZERO, EIGHT);
	const seconds = new Date().getSeconds().
		toString().
		slice(ZERO, EIGHT);
	const minutes = new Date().getMinutes().
		toString().
		slice(ZERO, EIGHT);
	const hours = new Date().getHours().
		toString().
		slice(ZERO, EIGHT);
	const currentTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
	return currentTime;
};

const currentTime = updateTime();

const extractTimeFromPingOutput = (output) => {
	const timeMatches = output.match(/time=(?<temp1>[\d.]+) ms/gu);

	if (timeMatches) {
		const times = timeMatches.map((match) => parseFloat(match.match(/(?<temp1>[\d.]+)/u)[ZERO]));
		return times.join(", ");
	}
	return "Ping failed";
};

const pingServer = () => {
	try {
		const output = execSync("ping -c 1 -v ismyserveron.net -S").toString();
		const pingTimes = extractTimeFromPingOutput(output);
		return {
			currentTime,
			pingTimes
		};
	} catch (error) {
		winstonLogger.error("Error while pinging server:", error);
		return {
			"currentTime": new Date().toISOString(),
			"pingTimes": "Ping failed"
		};
	}
};

let currentStatus = pingServer();

const testGet = (req, res) => {
	res.status(TWO_HUNDRED).send(currentStatus);
	winstonLogger.info("Got a GET request at /test");
};

setInterval(() => {
	currentStatus = pingServer();
}, ONE * ONE_THOUSAND);

export { testGet };
