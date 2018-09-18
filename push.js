/**
  push() function is opposite of the pop() functionn. 
  The push() function add element(provided to the push function) at the last to an array and also increments the length of the array,
  and returns the length of the array. 
  Note : 1) push() function directly modify the original array
         2) If you try the push() funciton without argument, it will return the original array length.
         3) push() function adds element provided as an argument and returns length of the updated array.
**/

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] // length of array = 9

console.log("myArray is===" + myArray)
console.log("Before push()====" + myArray);

var pushArray = myArray.push(12);

console.log("After push()====" + myArray); // 1,2,3,4,5,6,7,8,9,12
console.log("Returned value===" + pushArray); // 10

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12] // length of array = 10

console.log("Before push()====" + myArray); // 1,2,3,4,5,6,7,8,9,12

var pushArray = myArray.push();

console.log("After push()====" + myArray); // 1,2,3,4,5,6,7,8,9,12
console.log("Returned value===" + pushArray); // 10
