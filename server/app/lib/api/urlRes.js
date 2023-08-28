import winstonLogger from "../winstonFunction.js";

const TWO_HUNDRED = 200;
const FOUR_HUNDRED = 400;

const urlPost = (req, res) => {
	if (req.body && req.body.url) {
		winstonLogger.info(`Got a POST request at /url with the data: ${req.body.url}`);
		res.status(TWO_HUNDRED).send("Got a POST request at /url");
	} else {
		winstonLogger.info("Got an empty POST request at /url");
		res.status(FOUR_HUNDRED).send("Bad Request: Missing URL");
	}
};
export default urlPost;

