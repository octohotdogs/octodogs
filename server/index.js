const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/itineraries', (req, res) => {
  res.end();
});

app.post('/itineraries', (req, res) => {
  res.end();
});

app.get('/stops', (req, res) => {
  res.end();
});

app.get('/user', (req, res) => {
  res.end();
});

app.post('/user', (req, res) => {
  res.end();
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
