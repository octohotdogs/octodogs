require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

console.log("dirname: ", __dirname);
app.use(express.static(path.join(__dirname, '/../client')));
app.use('/bootstrap', express.static(__dirname + '/../node_modules/bootstrap/dist/css'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));

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
