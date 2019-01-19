/* task - simple array sum */

function simpleArraySum(ar) {
    let sum = ar.reduce(function (acumulado, atual) {
        return acumulado + atual;
    }, 0);
    return sum;
}

/* test */
let ar = [4, 5, 11];
simpleArraySum(ar);
