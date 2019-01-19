// Calculadora de área do círculo

var raio = parseFloat(prompt("Informe o raio do círculo: "));

var area = 3.14 * (raio ** 2);

document.write("A área do círculo de raio ", raio, "cm é ", area.toFixed(2), "cm²");