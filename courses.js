const express = require('express');

const app = express();

//to start a Server
app.listen(9000, function (err, res) {
  console.log('Running');
});

const courses = [{ id: 1, name: 'course' }];
