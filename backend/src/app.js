const express = require('express');
const cors = require('cors');
const router = require('./routers');
const app = express();

app.use(express.json());

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use('/', router);

module.exports = app;
