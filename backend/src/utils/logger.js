'use strict';

const winston = require('winston');

const formatter = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.splat(),
  winston.format.printf((info) => {
    const { timestamp, level, message, ...meta } = info;

    return `${timestamp} [${level}]: ${message} ${
      Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
    }`;
  })
);

class Logger {
  constructor() {
    const transportConsole = new winston.transports.Console({
      handleExceptions: true,
    });

    const logFile = 'tmp/backend.log';
    const transportFile = new winston.transports.File({
      filename: logFile,
      handleExceptions: true,
    });

    const transports = [transportConsole, transportFile];

    this.logger = winston.createLogger({
      levels: winston.config.syslog.levels,
      level: 'info',
      exitOnError: false,
      transports,
      format: formatter,
    });
  }

  info(msg, meta) {
    this.logger.info(msg, meta);
  }

  debug(msg, meta) {
    this.logger.debug(msg, meta);
  }

  warn(msg, meta) {
    this.logger.warn(msg, meta);
  }

  error(msg, meta) {
    this.logger.error(msg, meta);
  }
}

module.exports = new Logger();
