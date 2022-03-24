//Check wheteher the entered string contains a vowel or consonant
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,

  output: process.stdout,
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  var output = check(answer);
  if (output == 'true') {
    console.log('contains vowel');
  } else {
    console.log('no vowel');
  }
  rl.close();
});

var check = (answer) => {
  for (e in answer) {
    var a = answer[e];

    if (a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u') {
      return true;
    }
  }
};
