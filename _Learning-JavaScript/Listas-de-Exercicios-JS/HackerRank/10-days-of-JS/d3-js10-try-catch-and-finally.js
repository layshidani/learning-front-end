function reverseString(s) {
  if (typeof s != 'string') {
      console.log('s.split is not a function');
      console.log(s);
  }
  console.log(s.split('').reverse().join(''));
}

//tests
reverseString("1234");
reverseString('abcd');
// reverseString(Number(1234));