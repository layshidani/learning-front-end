// calculadora de média de notas

var n1 = parseFloat(prompt("Informe a 1ª nota: "));
var n2 = parseFloat(prompt("Informe a 2ª nota: "));
var n3 = parseFloat(prompt("Informe a 3ª nota: "));
var n4 = parseFloat(prompt("Informe a 4ª nota: "));

var media = (n1 + n2 + n3 + n4) / 4;

document.write("A média é: ", media);