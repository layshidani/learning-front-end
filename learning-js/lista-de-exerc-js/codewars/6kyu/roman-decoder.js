// Roman Numerals Decoder
// // // // Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

const solution = (roman) => {
  const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let result = 0;

  roman = String(roman).toUpperCase();

  for (let i in integers) {
    while (roman.indexOf(romans[i]) === 0) {
      result += integers[i];
      roman = roman.replace(romans[i], '');
    }
  }

  return result;
}

console.log('solution: XX ', solution('XX'));
