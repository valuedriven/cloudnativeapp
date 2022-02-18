const Config = require('../utils/config');
Config.loadConfig();
const { logger } = require('../utils/logger');

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  storage: process.env.DB_STORAGE,
  logging: (msg) => logger.info(msg),
  define: {
    timestamps: true,
  },
};
