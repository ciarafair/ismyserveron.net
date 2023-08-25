import { createLogger, format, transports } from "winston";

const fileFormat = format.combine(
	format.timestamp({
		"format": "YYYY-MM-DD HH:mm:ss"
	}),
	format.json()
);

const consoleFormat = format.combine(
	format.colorize(),
	format.timestamp({
		"format": "YYYY-MM-DD HH:mm:ss"
	}),
	format.prettyPrint(),
	format.align(),
	format.splat(),
	format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`)
);

const transportConst = [
	new transports.Console({
		"format": consoleFormat
	}),
	new transports.File({
		"filename": "logs/index.log",
		"format": fileFormat,
		"level": "info"
	}),
	new transports.File({
		"filename": "logs/error.log",
		"format": fileFormat,
		"level": "error"
	})
];

const logConst = {
	"statusLevels": true,
	"transports": transportConst
};

const winstonLogger = createLogger(logConst);
export default winstonLogger;
