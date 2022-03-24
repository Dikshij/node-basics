const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,

  output: process.stdout,
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  hello(answer);
  rl.close();
});

function hello(answer) {
  console.log('ff' + answer);
}

hello1 = () => console.log('hh'); //arrow function
