console.log('>>>> FCC - Basic Algorithm Scripting')

console.log('-> : Confirm the Ending')
// Check if a string (first argument, str) ends with the given target string (second argument, target)
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let index = str.length - target.length
  let verif = str.slice(index)

  if (verif === target) {
    return true
  }

  return false;
}

//test
console.log(confirmEnding("Bastian", "n")); // true



console.log('-> Basic Algorithm Scripting: Repeat a String')
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function repeatStringNumTimes(str, num) {
  // repeat after me
  let result = ''

  for (let i = 0; i < num; i++) {
    result += str
  }
  return result;
}

// test
console.log(repeatStringNumTimes("abc", 3));



console.log('-> Basic Algorithm Scripting: Truncate a String')

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.substr(0, num) + '...'
  }

  return str.substr(0, num);
}

// test

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //"A-tisket..."


console.log('-> Basic Algorithm Scripting: Finders Keepers')
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.


function findElement(arr, func) {
  let num = 0;

  for (let num of arr) {
    if (func(num)) {
      return num
    }
  }
  return undefined
}

// test

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) // should return 8.

console.log("-> Basic Algorithm Scripting: Boo who")
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  
  return typeof bool === 'boolean' ? true : false

}

console.log(booWho(null))

console.log("-> Title Case a Sentence")
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  let convertToArr = str.toLowerCase().split(' ')
  let result = convertToArr.map((letter) => letter.replace(letter.charAt(0), letter.charAt(0).toUpperCase()))
  return result.join(' ')
}

// teste 
console.log(titleCase("I'm a little tea pot"));


console.log('-> Slice and Splice');

// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let lastNumbers = arr2.slice(n)
  let newArr2 = arr2.slice(0, n).concat(arr1)
  return newArr2.concat(lastNumbers);
}

// test
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));



console.log('-> Falsy Bouncer');

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  let trueElements = []
  for (let elem of arr) {
    if (Boolean(elem)) {
      trueElements.push(elem)
    }
  }
  return trueElements
}

// teste
console.log(bouncer([7, "ate", "", false, 9])) // [ 7, 'ate', 9 ]



console.log('-> Where do I Belong');

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num)
  arr.sort((a, b) => a - b);
  return arr.indexOf(num)
}

// teste
console.log(getIndexToIns([40, 60], 50)) // 1
console.log(getIndexToIns([3, 10, 5], 3)) // 0


console.log('-> Mutations');

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {

  let trueLetters = 0

  for (letter of arr[1]) {
    if (arr[0].indexOf(letter) > -1) {
      trueLetters++
    }
  }
  if (trueLetters.length === arr[1].length) {
    return true
  }
  return false
}

// teste
console.log(mutation(["hello", "hey"]))
console.log(mutation(["hello", "Hello"]))
