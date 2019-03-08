console.log("-> Sum All Numbers in a Range");
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);

  let resultado = 0;

  for (let i = min; i <= max; i++) {
    resultado += i;
  }

  return resultado;
}

//teste

console.log('sumAll([1, 4]): ', sumAll([1, 4])); // 10


console.log('-> Diff Two Arrays');

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  return arr1.filter(element => !arr2.includes(element)).concat(arr2.filter(element => !arr1.includes(element)))
}

// teste
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));



console.log('-> Seek and Destroy');
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, ...args) {
  // Remove all the values
  let result = arr.filter((elem) => !args.includes(elem));
  return result;
}

console.log('destroyer([1, 2, 3, 1, 2, 3], 2, 3): ', destroyer([1, 2, 3, 1, 2, 3], 2, 3));



console.log('-> Wherefore art thou');

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  // What's in a name?
  let sourceKeys = Object.keys(source);
  // Only change code below this line
  return collection.filter(obj => {
    for (let key in sourceKeys) {
      if (!obj.hasOwnProperty(sourceKeys[key]) || obj[sourceKeys[key]] !== source[sourceKeys[key]]) {
        return false;
      }
    }
    return true;
  });
}

// teste
console.log('whatIsInAName', whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


console.log('-> Spinal Tap Case');
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}


console.log('spinalCase("This Is Spinal Tap"): ', spinalCase('This Is Spinal Tap'))
console.log('spinalCase("thisIsSpinal_Tap"): ', spinalCase("thisIsSpinal_Tap"))
