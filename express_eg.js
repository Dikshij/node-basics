const express = require('express');

const app = express();

//to start a Server
app.listen(9000, function (err, res) {
  console.log('Running');
});

//get api
app.get('/', function (req, res) {
  res.send('Heyy');
});

//get api
/*
app.get('/alien', function (req, res) {
  res.send('Hi Alien');
});
*/

//To fetch data of particular index
app.get('/alien/:id', function (req, res) {
  const id = req.params.id;
  res.send('hey navin ' + id);
});

//query api eg /alien?2
app.get('/alien', function (req, res) {
  const id = req.query.id;
  res.send('Hi Alien1' + id);
});
