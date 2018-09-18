/**
  shift() function is opposite of the unshift() functionn. 
  The shift() function removes the first element from an array and also decrements the length of the array,
  and returns the value which was removed from the array. 
  Note : 1) shift() function directly modify the original array
         2) If you try the shift() funciton on empty array, it will return undefined.
         3) shift() function returns the first element of the array it is called on.
**/

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] // length of array = 9

console.log("myArray is===" + myArray)
console.log("Before shift()====" + myArray);

var shiftArray = myArray.shift();

console.log("After shift()====" + myArray); // 2,3,4,5,6,7,8,9
console.log("Returned value===" + shiftArray); // 1

var myArray = [2, 3, 4, 5, 6, 7, 8, 9] // length of array = 8

console.log("Before shift()====" + myArray); // 2,3,4,5,6,7,8,9

var shiftArray = myArray.shift();
var shiftArray = myArray.shift();
var shiftArray = myArray.shift();

console.log("After shift()====" + myArray); // 5,6,7,8,9
console.log("Returned value===" + shiftArray); // 4
