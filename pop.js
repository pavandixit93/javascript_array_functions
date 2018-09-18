/**
  pop() function is opposite of the push() functionn. 

  The pop() function removes the last element from an array and also decrements the length of the array,
  and returns the value which was removed from the array. 

  Note : 1) pop() function directly modify the original array
         2) If you try the pop() funciton on empty array, it will return undefined.
         3) pop() function returns the last element of the array it is called on.
**/

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] // length of array = 9

console.log("myArray is===" + myArray)
console.log("Before pop()====" + myArray);

var popArray = myArray.pop();

console.log("After pop()====" + myArray); // 1,2,3,4,5,6,7,8
console.log("Returned value===" + popArray); // 9

var myArray = [1, 2, 3, 4, 5, 6, 7, 8] // length of array = 8

console.log("Before pop()====" + myArray); // 1,2,3,4,5,6,7,8

var popArray = myArray.pop();
var popArray = myArray.pop();
var popArray = myArray.pop();

console.log("After pop()====" + myArray); // 1,2,3,4,5
console.log("Returned value===" + popArray); // 6
