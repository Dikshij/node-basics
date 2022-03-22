var fs = require('fs');

fs.readFile('calc.js', 'utf-8', function (err, data) {
  console.log(data);
});

fs.writeFile('custom.js', 'console.log("hiii")', function (err) {
  console.log('completd');
});

fs.appendFile('custom.js', 'console.log("hiiihhhh")', function (err) {
  console.log('completd');
});

//to deletr a file
fs.unlink('custom.js', function (err) {
  console.log('completd');
});
