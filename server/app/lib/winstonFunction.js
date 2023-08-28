import winston from "winston";


const fileFormat = winston.format.combine(
	winston.format.timestamp({
		"format": "YYYY-MM-DD HH:mm:ss"
	}),
	winston.format.json()
);


const consoleFormat = winston.format.combine(
	winston.format.colorize(),
	winston.format.timestamp({
		"format": "YYYY-MM-DD HH:mm:ss"
	}),
	winston.format.prettyPrint(),
	winston.format.align(),
	winston.format.splat(),
	winston.format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`)
);

const transportConst = [
	new winston.transports.Console({
		"format": consoleFormat
	}),

	new winston.transports.File({
		"filename": "../../logs/index.log",
		"format": fileFormat,
		"level": "info"
	}),

	new winston.transports.File({
		"filename": "../../logs/error.log",
		"format": fileFormat,
		"level": "error"
	})
];

const winstonLogger = winston.createLogger({
	"level": "info",
	"transports": transportConst
});

export default winstonLogger;
