console.log("Sum All Numbers in a Range");
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
sumAll([1, 4]); // 10