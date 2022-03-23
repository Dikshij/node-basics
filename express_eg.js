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
app.get('/alien', function (req, res) {
  res.send('Hi Alien');
});
