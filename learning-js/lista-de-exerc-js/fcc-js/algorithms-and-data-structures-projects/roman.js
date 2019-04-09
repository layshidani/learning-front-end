console.log('-> Roman Numeral Converter');

// Convert the given number into a roman numeral.
// 
// All roman numerals answers should be provided in upper-case.


function convertToRoman(num) {
  const romanNumbers = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

  let romanNumber = '';

  function conversion(currentNum) {
    for (let index in romanNumbers) {
      if (currentNum >= romanNumbers[index][0]) {
        romanNumber = romanNumber + romanNumbers[index][1].repeat(Math.floor(currentNum / romanNumbers[index][0]));
        conversion(currentNum % romanNumbers[index][0]);
        break;
      }
    }
  };
  conversion(num);
  return romanNumber;
}

console.log('convertToRoman(36): ', convertToRoman(36));