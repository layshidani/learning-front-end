/* TASK:
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  if (a === 0) {
      return 'Zero Error';
  } else if (a < 1) {
      return 'Negative Error';
  } else {
      return 'YES';
  }
}

// tests
console.log(isPositive(-2));
console.log(isPositive(-1));
console.log(isPositive(0));
console.log(isPositive(1));
console.log(isPositive(2));
