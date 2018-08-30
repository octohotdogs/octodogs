require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/itineraries', (req, res) => {
  res.end('TODO: Returning a list of itineraries');
});

app.post('/itineraries', (req, res) => {
  res.end('TODO: An itinerary has been created');
});

app.get('/stops', (req, res) => {
  res.end('TODO: Returning a list of stops');
});

app.get('/user', (req, res) => {
  res.end('TODO: Returning a user');
});

app.post('/user', (req, res) => {
  res.end('TODO: Creating a user');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
