function sides(literals, ...expressions) {
  let result;
  let a = expressions[0];
  let p = expressions[1];
  let s = Math.sqrt((p * p) - (16 * a));
  const s1 = (p + s) / 4;
  const s2 = (p - s) / 4;
  result = [s1, s2];
  return result.sort();
}

// test
let expressions = [140, 48];
console.log(sides(expressions));
