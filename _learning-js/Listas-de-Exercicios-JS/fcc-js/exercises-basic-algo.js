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