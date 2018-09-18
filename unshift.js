/**
  unshift() function is opposite of the shift() functionn. 
  The unshift() function add element(provided argument to the unshift function) at the starting to an array and also increments the length of the array,
  and returns the length of the array. 
  Note : 1) unshift() function directly modify the original array
         2) If you try the unshift() funciton without argument, it will return the original array length.
         3) unshift() function adds argument element at the start and returns length of the updated array.
**/

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] // length of array = 9

console.log("myArray is===" + myArray)
console.log("Before unshift()====" + myArray);

var unshiftArray = myArray.unshift(12);

console.log("After unshift()====" + myArray); // 12,1,2,3,4,5,6,7,8,9
console.log("Returned value===" + unshiftArray); // 10

var myArray = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9] // length of array = 10

console.log("Before unshift()====" + myArray); // 12,1,2,3,4,5,6,7,8,9

var unshiftArray = myArray.unshift();

console.log("After unshift()====" + myArray); // 12,1,2,3,4,5,6,7,8,9
console.log("Returned value===" + unshiftArray); // 10
