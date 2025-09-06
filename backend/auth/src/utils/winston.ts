import path from 'path';
import fs from 'fs';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, label, printf } = winston.format;

const logDir = process.env.LOG_DIR || path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${label} | ${new Date(timestamp as string).toISOString()} | ${level.toUpperCase()} | ${message}`;
});

const transport = new winston.transports.DailyRotateFile({
  level: 'info',
  filename: path.join(logDir, '%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxFiles: '365d',
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(label({ label: 'MOTFOREX-BANK-GATEWAY' }), timestamp(), customFormat),
  transports: [new winston.transports.Console(), transport],
});

export default logger;
