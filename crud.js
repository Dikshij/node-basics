const express = require('express');
const db = require('mongodb');

const app = express();

app.listen(9000, function (req, res) {
  console.log('started');
});

app.get('/', function (req, res) {
  res.send('hey');
});
