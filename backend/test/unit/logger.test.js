const logger = require('../../src/utils/logger');

test('Test logger call', async () => {
  logger.debug('This is a log debug level');
  logger.info('This is a log info level');
  logger.warning('This is a log warning level');
  logger.error('This is a log error level');
});
