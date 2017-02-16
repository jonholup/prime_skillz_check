// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
for (var i = 0; i < 5; i++) {
  checkz++;
}

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
for (var i = 0; i < 3; i++) {
  checkz -= 2;
}
//redo
while(i < 3) {
  checks -= 2;
  i++;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

// var numbers declared as an array with values 1 through 7
// var total is set as zero. this will count the number will store our value globally per
// line 20's for loop.
// the for loop adds the value of each array index to the total value.
