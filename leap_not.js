const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,

  output: process.stdout,
});

rl.question('Enter year to check? ', (answer) => {
  console.log(`Thank you for your response: ${answer}`);
  var output = check(answer);
  console.log(output);

  rl.close();
});

var check = (year1) => {
  if (year1 % 4 == 0) {
    return 'leap';
  } else {
    return 'not leap';
  }
};
