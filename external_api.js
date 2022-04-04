const express = require('express');
//import fetch from 'node-fetch';
const https = require('https');

const app = express();

//to start a Server
app.listen(9000, function (err, res) {
  console.log('Running');
});

//get api
app.get('/', function (req, res) {
  //var output = getData();

  //res.send(output);
  res.setHeader('Content-Type', 'application/json');
  //console.log(output);
  res.send(getData());
  //return res.json(getStandardResponse(true, '', output));
});

const url = 'https://jsonplaceholder.typicode.com/todos/1';

/*async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
}
*/

function getData() {
  https
    .get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        data = JSON.parse(data);
        console.log(data);

        return data;
      });
    })
    .on('error', (err) => {
      console.log(err.message);
    });
}

function getStandardResponse(status, message, data) {
  return {
    status: status,
    message: message,
    data: data,
  };
}
