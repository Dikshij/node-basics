//largest number in an array
var a = [3, 14, 5, 6];
var temp = 0;

for (var i = 0; i < a.length; i++) {
  if (a[i] > temp) {
    temp = a[i];
  }
}

console.log(temp);
