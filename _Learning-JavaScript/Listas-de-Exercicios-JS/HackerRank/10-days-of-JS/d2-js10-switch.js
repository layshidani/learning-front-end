// task: switch

function getLetter(s) {
  let letter;
  switch (s[0]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      letter = 'A';
      break;
    case 'b':
    case 'c':
    case 'd':
    case 'e':
    case 'f':
      letter = 'B';
      break;
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
      letter = 'C';
      break;
    case 'n':
    case 'o':
    case 'p':
    case 'q':
    case 'r':
    case 't':
    case 'v':
    case 'w':
    case 'x':
    case 'y':
    case 'z':
      letter = 'D';
      break;
    default:
    letter = 'Try Again'
      break;
  }
  return letter;
}


//tests
let s = 'adfgt';
getLetter(s);