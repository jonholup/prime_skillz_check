// 1 - Use a built-in method of Arrays
// to add the value 32 to the end of
// the following array.

var arr = [3, 4, 6, 0];
arr.push(32);
console.log(arr);
// 2 - Remove the first value from
// arr using the Array built-in method slice.
arr = arr.slice(1);
console.log(arr);

// 3 - Add the number 11 to the beginning of arr
arr.unshift(11);
console.log(arr);
