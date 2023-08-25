import winstonLogger from "../winstonFunction.js";

const TWO_HUNDRED = 200;
const BAD_REQUEST = 400;

const urlPost = (req, res) => {
	if (req.data && req.data.url) {
		winstonLogger.info(`Got a POST request at /url with the data: ${req.data.url}`);
		res.status(TWO_HUNDRED).send("Got a POST request at /url");
	} else {
		winstonLogger.info("Got an empty POST request at /url");
		res.status(BAD_REQUEST).send("Bad Request: Missing URL");
	}
};

export default urlPost;
