// task find the 2nd largest number
function getSecondLargest(nums) {
    let largerNum = 0;
    let secondLarger = 0;

    for (let i = 0; i < nums.length; i++) {
        let number = parseInt(nums[i]);
        if (number > largerNum) {
            secondLarger = largerNum;
            largerNum = number;
        }
        if ((number < largerNum) && (number > secondLarger)) {
            secondLarger = number;
        }
    }
    return secondLarger;
}

//test
let nums = [5, 2, 3, 6, 6, 5];
getSecondLargest(nums);

/*
*
*
*
*/

// this function bellow had worked with given array tests, but don't work with the format given by hacker rank tests
// function getSecondLargest(nums) {
//     // Complete the function
//     nums.sort();
//     let lastIndex = nums.length - 1;
//     let largerNumber = nums[lastIndex];
//     (largerNumber - 1) in nums ? console.log(largerNumber - 1) : 
//     (largerNumber - 2) in nums ? console.log(largerNumber - 2) : 
//     (largerNumber - 3) in nums ? console.log(largerNumber - 3) :
//     (largerNumber - 4) in nums ? console.log(largerNumber - 4) :
//     (largerNumber - 5) in nums ? console.log(largerNumber - 5) :
//     (largerNumber - 6) in nums ? console.log(largerNumber - 6) :
//     (largerNumber - 7) in nums ? console.log(largerNumber - 7) :
//     (largerNumber - 8) in nums ? console.log(largerNumber - 8) :
//     console.log(1);
// }

// //test
// let nums = [5, 2, 3, 6, 6, 5];
// getSecondLargest(nums);

