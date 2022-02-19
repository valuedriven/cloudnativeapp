const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { logger } = require('./utils/logger');
const router = require('./routers');
const app = express();

app.use(express.json());
app.use(
  morgan('combined', { stream: { write: (message) => logger.info(message) } })
);

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use('/', router);

module.exports = app;
