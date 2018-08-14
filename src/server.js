import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('../public/index.js');
});

app.listen(config.port, function listenHandler() {
  console.log(`listening on port ${config.port}`);
});
