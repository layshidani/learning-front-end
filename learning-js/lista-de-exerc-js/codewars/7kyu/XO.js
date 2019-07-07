function XO(str) {
  //code here
  const Xarr = [];
  const Oarr = [];

  for (let letter of str) {
    letter.toUpperCase() === 'X'
      ? Xarr.push(letter)
      : letter.toUpperCase() === 'O'
        ? Oarr.push(letter)
        : console.log('No');
  };

  if (Xarr.length === Oarr.length) {
    return true
  }
  return false

  // (Xarr.length === Oarr.length) ? true : false;
}

console.log('XO(xo)', XO('xo'));
console.log('XO("xxOo")', XO("xxOo"));
console.log('XO("xxxm")', XO("xxxm"));
