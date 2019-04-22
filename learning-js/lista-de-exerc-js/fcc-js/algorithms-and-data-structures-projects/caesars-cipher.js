console.log('Caesars Cipher');

function rot13(str) { // LBH QVQ VG!
  const alphSize = 26;
  const aUppercase = 65;
  const zUppercase = aUppercase + alphSize - 1;
  const aLowercase = 97;
  const zLowercase = aLowercase + alphSize - 1;
  const decodeOffset = 13;
  let decodeLetterOffset;
  let textDecode = '';
  
  for (let i = 0; i < str.length; i++) {    
    let deCodeAscii = str.charCodeAt(i);

    // Se uppercase
    if (deCodeAscii >= aUppercase && deCodeAscii  <= zUppercase) {
      decodeLetterOffset = (((deCodeAscii - aUppercase) - (decodeOffset % alphSize)) + alphSize) % alphSize + aUppercase;
    // se lowercase
    } else if (deCodeAscii  >= aLowercase && deCodeAscii <= zLowercase) {
      decodeLetterOffset = (((deCodeAscii - aLowercase) - (decodeOffset % alphSize)) + alphSize) % alphSize + aLowercase;
    // se outros
    } else {
      decodeLetterOffset = deCodeAscii;
    } 
    textDecode = textDecode + String.fromCharCode(decodeLetterOffset);
  }
  return textDecode;
}

// Change the inputs below to test
console.log('rot13("SERR PBQR PNZC"): ', rot13("SERR PBQR PNZC"));