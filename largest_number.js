var a = 6;
var b = 5;
var c = 4;

if (a > b) {
  if (a > c) {
    console.log('a is greatest number' + a);
  } else {
    console.log('c is greatest number' + c);
  }
} else if (b > a) {
  if (b > c) {
    console.log('b is greatest' + b);
  } else {
    console.log('c is greatest number' + c);
  }
}
