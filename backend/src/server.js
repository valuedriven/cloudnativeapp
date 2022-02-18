const app = require('./app');
const logger = require('./utils/logger');
const Config = require('./utils/config');
Config.loadConfig();
const port = process.env.PORT;

app.listen(port, () => {
  logger.info(`Backend module initialized on port ${port}`);
});
