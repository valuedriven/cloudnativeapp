const app = require('./app');
const Config = require('./utils/config');
Config.loadConfig();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Backend module initialized on port ${port}`);
});
