const express = require('express');
const router = express.Router();
const welcomeMessage = 'Welcome to the backend module...';

router.get('/', (req, res) => {
  res.send(welcomeMessage);
});

module.exports = router;
