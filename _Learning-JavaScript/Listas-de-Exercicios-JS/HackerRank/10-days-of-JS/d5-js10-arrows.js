/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  return nums.map( (element) => (element % 2 === 0) ? (element * 2) : (element * 3) );
}


// test
let nums = [1, 2, 3, 4, 5]; // [ 3, 4, 9, 8, 15 ]
console.log(modifyArray(nums));
