const app = require('./app');
const port = 3001;

app.listen(port, () => {
  console.log(`Backend module initialized on port ${port}`);
});
