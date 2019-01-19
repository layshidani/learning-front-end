/* Task
Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e.,n! factorial).*/

function factorial(n) {
  let nFactorial = 1;
  for (let i = 1; i <= n; i++) {
      nFactorial *= i;
  }
  return nFactorial;
};

/* teste */
factorial(4); // 24
factorial(5); // 120